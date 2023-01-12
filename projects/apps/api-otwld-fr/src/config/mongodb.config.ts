import {registerAs} from '@nestjs/config';

export default registerAs('mongodb', () => {
  const option = {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    pwd: process.env.DATABASE_PASSWORD,
    uri: process.env.DATABASE_URI,
  };
  return {
    ...option,
    uri: `mongodb://${option.user}:${option.pwd}@${option.host}:${option.port}/${option.name}`,
  };
});
