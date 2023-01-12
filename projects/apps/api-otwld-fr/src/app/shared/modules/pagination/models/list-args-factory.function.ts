import { ArgsType, Field, InputType, ReturnTypeFunc } from '@nestjs/graphql';
import { PaginationOption } from './input/pagination.input';
import { iListArgs } from './interfaces/list-args.interface';
import { eDirection } from './enums/direction.enum';
import { iOrderBy } from './interfaces/order-by.interface';

type ListArgsConstructor<T> = new (...args: any[]) => iListArgs<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ListArgsFactory<T extends ReturnTypeFunc>(listOfFields: T, name: string): ListArgsConstructor<T> {
  @InputType(name + 'OrderBy', { isAbstract: true })
  abstract class OrderBy<T> implements iOrderBy<T> {
    @Field(listOfFields, { nullable: true })
    field: T;

    @Field(() => eDirection, { nullable: true })
    direction: eDirection;
  }

  @ArgsType()
  @InputType()
  class ListArgs implements iListArgs<T> {
    @Field(() => PaginationOption, { nullable: false })
    public pagination: PaginationOption;

    @Field(() => OrderBy, { nullable: true })
    public order: OrderBy<T>;
  }

  return ListArgs;
}
