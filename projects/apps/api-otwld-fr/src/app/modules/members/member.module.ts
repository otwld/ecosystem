import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Member, MemberSchema} from './models/member.model';
import {MemberService} from './services/member.service';
import {MemberResolver} from './resolvers/member.resolver';
import {MemberSkillResolver} from './resolvers/memberSkill.resolver';
import {MemberWorkModeResolver} from './resolvers/memberWorkMode.resolver';
import {ProjectModule} from '../projects/project.module';
import {MediaModule} from '../medias/media.module';


@Module({
  imports: [MongooseModule.forFeature([
    {name: Member.name, schema: MemberSchema},
    ]),
    ProjectModule, MediaModule],
  providers: [MemberService, MemberResolver, MemberSkillResolver, MemberWorkModeResolver],
  exports: [MemberService],
})
export class MemberModule {

}
