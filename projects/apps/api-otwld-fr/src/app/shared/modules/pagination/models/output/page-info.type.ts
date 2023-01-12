import { Field, ObjectType } from '@nestjs/graphql';

export interface iPageInfo {
  startCursor: string;
  endCursor: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

@ObjectType()
export class PageInfo implements iPageInfo {
  @Field({ nullable: true })
  public startCursor: string;

  @Field({ nullable: true })
  public endCursor: string;

  @Field({ nullable: true })
  public hasPrevPage: boolean;

  @Field({ nullable: true })
  public hasNextPage: boolean;
}
