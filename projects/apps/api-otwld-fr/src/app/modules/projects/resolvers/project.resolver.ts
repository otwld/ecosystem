import {Resolver} from '@nestjs/graphql';
import {Project} from '../models/project.model';
import {ProjectService} from '../services/project.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {
  }
}
