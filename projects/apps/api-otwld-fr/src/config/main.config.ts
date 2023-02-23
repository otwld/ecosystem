export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.ENV,
  isProduction: process.env.PRODUCTION === 'true',
  graphqlPlayground: process.env.GRAPHQL_PLAYGROUND === 'true',
  ttl: {
    limit: parseInt(process.env.TTL_LIMIT || '30', 10),
    waitingTime: parseInt(process.env.TTL_WAITING_TIME || '60', 10),
  }
});
