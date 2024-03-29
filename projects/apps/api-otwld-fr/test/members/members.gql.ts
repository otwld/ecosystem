import {gql} from 'apollo-server-express';

export const getMemberLightGql = gql`
query getMemberLight {
  getMemberById(id: "member-1") {
   _id,
   firstName,
   jobTitle
  }
}
`;

export const getMemberFullGql = gql`
  query getMemberLight {
    getMemberById(id: "member-1") {
      _id,
      firstName,
      jobTitle,
      socials {
        serviceName,
        link,
        icon
      },
      location {
        country,
        city,
        street,
        fullLocation
      },
      projects(pagination: {after: 1}) {
        edges {
          node {
            _id,
          }
        }
      },
      services {
        _id
      },
      skills {
        skill {
          _id,
          name
        },
        yearOfExperience,
        level
      },
      workModes {
        workMode {
          _id,
          name
        },
        description
      }
    }
  }
`;

export const getMemberMediaGql = gql`
  query getMemberMedia {
      getMemberById(id: "member-1") {
          medias(pagination: {after: 1}) {
              edges {
                  node {
                      _id,
                      title,
                      type,
                      author
                  }
              }
          }
      }
  }
`;

export const getMemberTestimonialsGql = gql`
  query getMemberTestimonials {
    getMemberById(id: "member-1") {
      testimonials {
        author {
          firstName,
          lastName,
          job
        },
        content,
      }
    }
  }
`;
