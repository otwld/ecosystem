import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Member, MemberSchema} from './models/member.model';
import {MemberService} from './services/member.service';
import {MemberResolver} from './resolvers/member.resolver';
import {MemberSkillResolver} from './resolvers/memberSkill.resolver';
import {MemberSkill, MemberSkillSchema} from './models/memberSkill.model';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Member.name, schema: MemberSchema},
    {
      name: MemberSkill.name,
      schema: MemberSkillSchema
    }])],
  providers: [MemberService, MemberResolver, MemberSkillResolver],
  exports: [MemberService],
})
export class MemberModule {

}
