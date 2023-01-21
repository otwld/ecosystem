import {Module} from '@nestjs/common';
import {ProjectService} from './services/project.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Project, ProjectSchema} from './models/project.model';
import {ProjectResolver} from './resolvers/project.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}])],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService]
})
export class ProjectModule {
}
