import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getAllEmployees: [Employee]
  }

  type Employee {
    id: ID
    name: String
    department: String
    position: String
  }
`;

export const resolvers = {
  Query: {
    getAllEmployees: () => [
      { id: 1, name: 'John Doe', department: 'Sales', position: 'Manager' },
      { id: 2, name: 'Jane Smith', department: 'Marketing', position: 'Executive' },
      { id: 3, name: 'Bob Johnson', department: 'IT', position: 'Developer' }
    ],
  },
};
