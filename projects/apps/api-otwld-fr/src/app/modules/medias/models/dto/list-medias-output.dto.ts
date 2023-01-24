import {ObjectType} from '@nestjs/graphql';
import {Page} from '../../../../shared/modules/pagination/models/output/page.type';
import {Media} from '../media.model';

@ObjectType({ isAbstract: true })
export class ListMediasPage extends Page(Media, 'MediaPage') {}
