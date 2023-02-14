import {gql} from 'apollo-server-express';

export const getTwoPaginatedGql = gql`
  query listProjects {
    getProjects(pagination: {after: 2}) {
      edges {
        cursor,
        node {
          _id
        }
      },
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPrevPage
      }
    }
  }
`;

export const getTwoPaginatedWithSortGql = gql`
  query listProjects {
    getProjects(pagination: {after: 2}, order: {field: startDate, direction: DESC}) {
      edges {
        cursor,
        node {
          _id
        }
      },
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPrevPage
      }
    }
  }
`;
export const getOneBeforePaginatedGql = gql`
  query listProjects {
    getProjects(pagination: {before: 1, cursor: "Mg=="}) {
      edges {
        cursor,
        node {
          _id
        }
      },
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPrevPage
      }
    }
  }
`;

export const getOneAfterPaginatedGql = gql`
  query listProjects {
    getProjects(pagination: {after: 1, cursor: "MQ=="}) {
      edges {
        cursor,
        node {
          _id
        }
      },
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPrevPage
      }
    }
  }
`;
export const getPaginationWithNoResultGql = gql`
  query listProjects {
    getProjects(pagination: {after: 1, cursor: "Mg=="}) {
      edges {
        cursor,
        node {
          _id
        }
      },
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPrevPage
      }
    }
  }
`;
