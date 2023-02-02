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
