import {gql} from 'apollo-server-express';

export const getProjectsGql = gql`
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
                endCursor,
                hasNextPage,
                hasPrevPage
            }
        }
    }
`;
export const getProjectBySlugGql = gql`
   query getProjectBySlug {
     getProjectBySlug(slug: "project-1") {
      _id
     }
   }
`;

export const getFullProjectBySlugGql = gql`
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

export const getRelatedProjectsGql = gql`
  query getRelatedProjects {
    getRelatedProjects(slug: "project-1") {
      _id
    }
  }
`;

export const getProjectBySlugWithNextProjectGql = gql`
  query getProjectBySlug {
    getProjectBySlug(slug: "project-1") {
      _id,
      nextProject {
        _id
      },
      previousProject {
        _id
      }
    }
  }
`;

