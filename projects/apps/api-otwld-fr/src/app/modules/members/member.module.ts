import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Member, MemberSchema} from './models/member.model';
import {MemberService} from './services/member.service';
import {MemberResolver} from './resolvers/member.resolver';
import {MemberSkillResolver} from './resolvers/memberSkill.resolver';
import {MemberSkill, MemberSkillSchema} from './models/memberSkill.model';
import {MemberWorkMode, MemberWorkModeSchema} from './models/memberWorkMode.model';
import {MemberWorkModeResolver} from './resolvers/memberWorkMode.resolver';
import {MemberSocial, MemberSocialSchema} from './models/memberSocials.model';
import {ProjectModule} from '../projects/project.module';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Member.name, schema: MemberSchema},
    {
      name: MemberSkill.name,
      schema: MemberSkillSchema
    }, {
      name: MemberWorkMode.name,
      schema: MemberWorkModeSchema
    }, {
      name: MemberSocial.name,
      schema: MemberSocialSchema
    }]),
    ProjectModule],
  providers: [MemberService, MemberResolver, MemberSkillResolver, MemberWorkModeResolver],
  exports: [MemberService],
})
export class MemberModule {

}
