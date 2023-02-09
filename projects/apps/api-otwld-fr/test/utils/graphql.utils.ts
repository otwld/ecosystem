import * as request from 'supertest';
import {app} from './app.utils';
import {HeaderLanguage} from '../../src/app/shared/modules/language/enums/language.enum';
import {ntb64} from '../../src/app/shared/utils/string.utils';
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export const createBaseGraphqlRequest = (query: string, language: HeaderLanguage = HeaderLanguage.FR) => {
  return request(app.app.getHttpServer())
    .post('/graphql')
    .set('language', language)
    .send({
      query
    })
    .expect((res) => expectNotGraphqlError(res))
    .expect(200)

}

export const expectNotGraphqlError = (res) => {
  if (res.error) {
    throw res.error;
  } else if (res.body.errors) {
    throw new Error(res.body.errors.reduce((acc, error) => acc + error.message, 'GraphQL errors: '));
  }
}

export const expectPaginatedResponse = (res, queryName: string) => {
  if (res.error) {
    throw res.error;
  } else if (res.body.errors) {
    throw new Error(res.body.errors.reduce((acc, error) => acc + error.message, 'GraphQL errors: '));
  } else if (!res.body.data[queryName]) {
    throw new Error(`No data for query ${queryName}`);
  } else if (!res.body.data[queryName].edges) {
    throw new Error(`No edges for query ${queryName}`);
  }
}
export const expectPaginationData = <T = unknown>(queryName: string, data: Array<Partial<T>>) => {
  const matchingEdges = {
    edges: [],
    pageInfo: {
      startCursor: ntb64(0),
      endCursor: ntb64(data.length - 1),
    }
  }
  for (const [i, item] of data.entries()) {
    matchingEdges.edges.push({
      node: item,
      cursor: ntb64(i)
    });
  }
  const query = {
    data: {}
  }
  query.data[queryName] = matchingEdges;
  return query;
}

export const expectGraphqlData = <T>(queryName: string, data: DeepPartial<T>) => {
  const query = {
    data: {}
  }
  query.data[queryName] = data;
  return query;
}
