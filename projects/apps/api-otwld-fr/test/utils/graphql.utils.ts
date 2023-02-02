import * as request from 'supertest';
import {app} from './app.utils';
import {HeaderLanguage} from '../../src/app/shared/modules/language/enums/language.enum';
import {ntb64} from '../../src/app/shared/utils/string.utils';

export const createBaseGraphqlRequest = (query: string, language: HeaderLanguage = HeaderLanguage.FR) => {
  return request(app.app.getHttpServer())
    .post('/graphql')
    .set('language', language)
    .send({
      query
    })
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
export const expectPaginationData = (name, data) => {
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
  query.data[name] = matchingEdges;
  return query;
}
