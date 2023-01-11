export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.ENV,
  isProduction: process.env.PRODUCTION === 'true',
  graphqlPlayground: process.env.GRAPHQL_PLAYGROUND === 'true',
});
