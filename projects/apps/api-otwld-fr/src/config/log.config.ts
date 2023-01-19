import { registerAs } from '@nestjs/config';

export default registerAs('log', () => ({
  debug: process.env.LOG_API_DEBUG === 'true',
  verbose: process.env.LOG_API_DEBUG === 'true',
  graphqlDebug: process.env.LOG_GRAPHQL_DEBUG === 'true',
}));
