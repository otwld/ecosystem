import { Field, ObjectType, Int } from '@nestjs/graphql';
import { PageInfo } from './page-info.type';
import { Type } from '@nestjs/common';
import { iEdge } from '../interfaces/edge.interface';
import { iPage } from '../interfaces/page.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Page<T>(ItemType: Type<T>, name?: string): any {
  @ObjectType(`Paginated${name || ItemType.name}Edge`)
  abstract class EdgeClass implements iEdge<T> {
    @Field(() => String, { nullable: true })
    public cursor: string;

    @Field(() => ItemType, { nullable: true })
    public node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PageClass implements iPage<T> {
    @Field(() => PageInfo, { nullable: true })
    public pageInfo: PageInfo;

    @Field(() => Int)
    public totalCount: number;

    @Field(() => [EdgeClass], { nullable: 'items' })
    public edges: EdgeClass[];
  }

  return PageClass;
}
