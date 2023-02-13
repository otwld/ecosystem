import {gql} from 'apollo-server-express';

export const getClientsQuery =  gql`
  query getClients {
    getAllClients {
      _id,
      name
    }
  }
`;
