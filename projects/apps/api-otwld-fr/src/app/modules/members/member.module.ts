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
import {MemberTestimonial, MemberTestimonialSchema} from './models/memberTestimonial.model';
import {MemberTestimonialResolver} from './resolvers/memberTestimonial.resolver';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Member.name, schema: MemberSchema},
    ]),
    ProjectModule],
  providers: [MemberService, MemberResolver, MemberSkillResolver, MemberWorkModeResolver, MemberTestimonialResolver],
  exports: [MemberService],
})
export class MemberModule {

}
