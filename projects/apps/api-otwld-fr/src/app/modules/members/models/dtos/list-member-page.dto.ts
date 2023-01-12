import {Page} from '../../../../shared/modules/pagination/models/output/page.type';
import {Member} from '../member.model';
import {ObjectType} from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class ListMemberPage extends Page(Member, 'MemberPage') {}
