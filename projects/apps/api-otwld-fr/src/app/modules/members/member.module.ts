import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Member, MemberSchema} from './models/member.model';
import {MemberService} from './services/member.service';
import {MemberResolver} from './resolvers/member.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: Member.name, schema: MemberSchema}])],
  providers: [MemberService, MemberResolver],
  exports: [MemberService],
})
export class MemberModule {

}
