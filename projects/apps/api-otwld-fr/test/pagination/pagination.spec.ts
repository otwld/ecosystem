import {Project} from '@ecosystem/shared-models';
import {
  getPaginationWithNoResultGql,
  getOneAfterPaginatedGql,
  getOneBeforePaginatedGql,
  getTwoPaginatedGql, getTwoPaginatedWithSortGql
} from './pagination.gql';
import {Project1, Project2, Project3} from '../utils/fixtures/project.fixtures';
import {ntb64} from '../../src/app/shared/utils/string.utils';
import {PaginatedGraphqlRequest} from '../utils/requests/graphql-request.utils';
import {app} from '../utils/app.utils';

describe('Pagination', () => {
  beforeAll(async () => {
    await app.createNestApplication();
  });
  it('should return a paginated response with two result', async () =>
    PaginatedGraphqlRequest.runTest<Project[]>(getTwoPaginatedGql, {
      pageInfo: {
        startCursor: ntb64(0),
        endCursor: ntb64(1),
        hasNextPage: true,
        hasPrevPage: false
      },
      debug: false
    }, [{
      _id: Project1._id
    }, {
      _id: Project2._id
    }])
  );
  it('should return a paginated response with two result sorted', async () =>
    PaginatedGraphqlRequest.runTest<Project[]>(getTwoPaginatedWithSortGql, {
      pageInfo: {
        startCursor: ntb64(0),
        endCursor: ntb64(1),
        hasNextPage: true,
        hasPrevPage: false
      },
      debug: false
    }, [{
      _id: Project3._id
    }, {
      _id: Project2._id
    }])
  );
  it('should return a paginated response with no result', async () => {
    PaginatedGraphqlRequest.runTest<Project[]>(getPaginationWithNoResultGql, {
      pageInfo: {
        startCursor: ntb64(3),
        endCursor: ntb64(3),
        hasNextPage: false,
        hasPrevPage: true
      },
      debug: true
    }, [])
  });

  it('should return a paginated response from after query with one result', async () =>
    PaginatedGraphqlRequest.runTest<Project[]>(getOneAfterPaginatedGql, {
      pageInfo: {
        startCursor: ntb64(2),
        endCursor: ntb64(2),
        hasNextPage: false,
        hasPrevPage: true
      },
      debug: false
    }, [{
      _id: Project3._id
    }])
  );
  it('should return a paginated response from before query', async () =>
    PaginatedGraphqlRequest.runTest<Project[]>(getOneBeforePaginatedGql, {
      pageInfo: {
        startCursor: ntb64(1),
        endCursor: ntb64(1),
        hasNextPage: true,
        hasPrevPage: true
      },
      debug: false
    }, [{
      _id: Project2._id
    }])
  );
  afterAll(async () => await app.close());

});
