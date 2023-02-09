export const getServicesPaginatedGql = `
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

export const getServicesGql = `
query getServices {
    getAllServices {
      _id,
      title
    }
}
`;
export const getServiceBySlugGql = `
   query getServiceBySlug {
     getService(slug: "service-1") {
      _id,
         title,
        icon,
        description
     }
   }
`;
