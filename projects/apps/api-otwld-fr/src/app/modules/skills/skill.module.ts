import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Skill, SkillSchema} from './models/skill.model';
import {SkillService} from './services/skill.service';
import {SkillResolver} from './resolvers/skill.resolver';

@Module( {
  imports: [MongooseModule.forFeature([{name: Skill.name, schema: SkillSchema}])],
  providers: [SkillService, SkillResolver],
  exports: [SkillService],
})
export class SkillModule {}
