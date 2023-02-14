import {DocumentNode} from 'graphql/index';
import {FieldNode, OperationDefinitionNode} from 'graphql/language/ast';
import * as request from 'supertest';
import {Response} from 'supertest';
import {app} from '../app.utils';
import {HeaderLanguage} from '../../../src/app/shared/modules/language/enums/language.enum';
import {b64tn, ntb64} from '../../../src/app/shared/utils/string.utils';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export interface GraphqlRequestConfig {
  expectError?: boolean;
  defaultLanguage?: HeaderLanguage | string;
  debug?: boolean;
  pageInfo?: {
    startCursor?: string,
    endCursor?: string,
    hasNextPage: boolean,
    hasPrevPage: boolean;
  }
}

class GraphqlRequest<T> {
  protected readonly operationName: string;
  private readonly body: string;

  constructor(private readonly doc: DocumentNode, protected readonly config: GraphqlRequestConfig,
              protected readonly expectedData?: DeepPartial<T>) {
    if (!doc.loc?.source?.body) {
      throw new Error('Cannot build gql body from document node');
    }
    this.body = doc.loc.source.body;
    this.operationName = this.extractOperationQueryName(doc);
  }

  public testRequest(language?: HeaderLanguage | string) {
    if (!language && this.config.defaultLanguage) {
      language = this.config.defaultLanguage;
    } else if (!language) {
      language = HeaderLanguage.FR;
    }
    let graphqlRequest = request(app.app.getHttpServer())
      .post('/graphql')
      .set('language', language)
      .send({
        query: this.body
      }).expect(200)
    if (this.config.debug) {
      graphqlRequest.expect((res) => console.log(JSON.stringify(res.body)))
    }
    if (this.config.expectError === false) {
      graphqlRequest = graphqlRequest.expect((res) => this.expectNotGraphqlError(res));
    }
    if (this.expectedData && !this.config.expectError) {
      graphqlRequest = graphqlRequest.expect(this.expectData());
    } else if (this.config.expectError && this.expectedData) {
      graphqlRequest = graphqlRequest.expect((res) => this.expectError(res));
    }
    return graphqlRequest;
  }

  public expectData() {
    const query = {
      data: {}
    }
    query.data[this.operationName] = this.expectedData;
    return query;
  }

  public expectError(res: Response) {
    if (!res) {
      throw new Error('No response');
    }
  }

  protected expectNotGraphqlError = (res: request.Response) => {
    if (res.error) {
      throw res.error;
    } else if (res.body.errors) {
      throw new Error(res.body.errors.reduce((acc, error) => acc + error.message, 'GraphQL errors: '));
    }
  }
  private extractOperationQueryName = (doc: DocumentNode): string => {
    if (!((doc.definitions as OperationDefinitionNode[])[0].selectionSet.selections as FieldNode[])[0].name.value) {
      throw new Error('Cannot get main query name from document node');
    }
    return ((doc.definitions as OperationDefinitionNode[])[0].selectionSet.selections as FieldNode[])[0].name.value;
  }
}

export class DefaultGraphqlRequest<T extends object> extends GraphqlRequest<T> {
  static runTest<T extends object>(doc: DocumentNode, config: GraphqlRequestConfig,
                                   expectedData?: DeepPartial<T>) {
    return new DefaultGraphqlRequest<T>(doc, config, expectedData).testRequest();
  }
}

export class PaginatedGraphqlRequest<T extends Array<object>> extends GraphqlRequest<T> {
  static runTest<T extends Array<object>>(doc: DocumentNode, config: GraphqlRequestConfig,
                                          expectedData?: DeepPartial<T>) {
    return new PaginatedGraphqlRequest<T>(doc, config, expectedData).testRequest();
  }

  override expectData() {
    const matchingEdges = {
      edges: [],
      pageInfo: <GraphqlRequestConfig['pageInfo']>{
        startCursor: this.config.pageInfo?.startCursor ? this.config.pageInfo.startCursor : ntb64(0),
        endCursor: this.config.pageInfo?.endCursor ? this.config.pageInfo.endCursor :
          ntb64(this.expectedData.length - 1),
      }
    }
    if (this.config.pageInfo?.hasNextPage !== undefined) {
      matchingEdges.pageInfo.hasNextPage = this.config.pageInfo.hasNextPage
    }
    if (this.config.pageInfo?.hasPrevPage !== undefined) {
      matchingEdges.pageInfo.hasPrevPage = this.config.pageInfo.hasPrevPage
    }
    for (const [i, item] of this.expectedData.entries()) {
      matchingEdges.edges.push({
        node: item,
        cursor: ntb64(i + b64tn(matchingEdges.pageInfo.startCursor))
      });
    }
    const query = {
      data: {}
    }
    query.data[this.operationName] = matchingEdges;
    return query;
  }
}

export class ErrorGraphqlRequest<T extends Array<{ message: string }>> extends GraphqlRequest<T> {
  static runTest<T extends Array<{ message: string }>>(doc: DocumentNode, config: GraphqlRequestConfig,
                                                       expectedData?: DeepPartial<T>) {
    return new ErrorGraphqlRequest(doc, config, expectedData).testRequest();
  }

  override expectError(res: Response) {
    if (!this.expectedData) {
      throw new Error(`Expected error data is missing`);
    }
    if (this.expectedData.length !== res.body.errors.length) {
      throw new Error(`Error count doesn't match expected error count`);
    }
    for (const [index, error] of this.expectedData.entries()) {
      if (!res.body.errors[index] || !res.body.errors[index].message || res.body.errors[index].message !==
        error.message) {
        throw new Error(`Error message doesn't match expected error message at index ${index}`);
      }
    }
  }
}
