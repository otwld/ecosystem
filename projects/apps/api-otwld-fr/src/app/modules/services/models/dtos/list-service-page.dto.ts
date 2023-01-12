import {Page} from '../../../../shared/modules/pagination/models/output/page.type';
import {Service} from '../service.model';
import {ObjectType} from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class ListServicePage extends Page(Service, 'ServicePage') {}
