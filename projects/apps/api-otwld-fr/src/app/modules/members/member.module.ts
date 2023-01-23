import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Member, MemberSchema} from './models/member.model';
import {MemberService} from './services/member.service';
import {MemberResolver} from './resolvers/member.resolver';
import {MemberSkillResolver} from './resolvers/memberSkill.resolver';
import {MemberWorkModeResolver} from './resolvers/memberWorkMode.resolver';
import {ProjectModule} from '../projects/project.module';


@Module({
  imports: [MongooseModule.forFeature([
    {name: Member.name, schema: MemberSchema},
    ]),
    ProjectModule],
  providers: [MemberService, MemberResolver, MemberSkillResolver, MemberWorkModeResolver],
  exports: [MemberService],
})
export class MemberModule {

}
