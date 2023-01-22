

import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import {memberData, projects, services, skills, testimonials, workModes} from './members';
dotenv.config();

async function getMongooseInstance() {
  const option = {
    host: process.env.MONGODB_HOST,
    port: parseInt(process.env.MONGODB_PORT, 10),
    name: process.env.MONGODB_DATABASE,
    user: process.env.MONGODB_USERNAME,
    pwd: process.env.MONGODB_PASSWORD,
    uri: process.env.MONGODB_URI,
  };
  const MONGO_URI=`mongodb://${option.user}:${option.pwd}@${option.host}:${option.port}/${option.name}`;

  await mongoose.connect(MONGO_URI, {
  });
  return mongoose;
}

function createMember() {

}

async function main() {
 const client = await getMongooseInstance();
  client.connection.collection('members').find().toArray((err, result) => {
  });
  // @ts-ignore
  await client.connection.collection('testimonials').insertMany(testimonials, {});
  // @ts-ignore
  await client.connection.collection('skills').insertMany(skills);
  // @ts-ignore
  await client.connection.collection('services').insertMany(services);
  // @ts-ignore

  await client.connection.collection('workmodes').insertMany(workModes);
  // @ts-ignore
  await client.connection.collection('projects').insertMany(projects);
  // @ts-ignore
  await client.connection.collection('members').insertOne(memberData);
}
main();

