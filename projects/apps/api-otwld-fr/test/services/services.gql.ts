import {gql} from 'apollo-server-express';

export const getServicesPaginatedGql = gql`
  query getServicesPaginated {
    getServicesPaginated(pagination: {after: 1}) {
      edges {
      cursor,
      node {
        _id,
        title,
        icon,
        description
      }
    },
    pageInfo {
      startCursor,
      endCursor
    }
    }
  }
`;

export const getServicesGql = gql`
query getServices {
    getAllServices {
      _id,
      title
    }
}
`;
export const getServiceBySlugGql = gql`
   query getServiceBySlug {
     getService(slug: "service-1") {
      _id,
         title,
        icon,
        description
     }
   }
`;
