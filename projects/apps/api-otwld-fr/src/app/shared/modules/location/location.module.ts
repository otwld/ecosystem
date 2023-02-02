import {Module} from '@nestjs/common';
import {LocationResolver} from './resolvers/location.resolver';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [LocationResolver],
})
export class LocationModule {
}
