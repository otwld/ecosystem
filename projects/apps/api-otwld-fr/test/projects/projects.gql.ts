export const getProjectsGql = `
  query listProjects {
    getProjects(pagination: {after: 1}) {
      edges {
      cursor,
      node {
        _id
      }
    },
    pageInfo {
      startCursor,
      endCursor
    }
    }
  }
`;
export const getProjectBySlugGql = `
   query getProjectBySlug {
     getProjectBySlug(slug: "project-1") {
      _id
     }
   }
`;

export const getFullProjectBySlugGql = `
   query getFullProjectBySlug {
     getProjectBySlug(slug: "project-1") {
      _id,
      startDateLabel,
      endDateLabel,
      services {
         _id,
         title,
          slug
      },
      clients {
        _id,
        name
     }
   }
 }
`;
