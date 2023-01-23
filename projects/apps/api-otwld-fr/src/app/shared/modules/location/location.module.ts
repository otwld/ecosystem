import {Module} from '@nestjs/common';
import {LocationResolver} from './resolvers/location.resolver';
import {MongooseModule} from '@nestjs/mongoose';
import {Location, LocationSchema} from './models/location.model';

@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [LocationResolver],
})
export class LocationModule {
}
