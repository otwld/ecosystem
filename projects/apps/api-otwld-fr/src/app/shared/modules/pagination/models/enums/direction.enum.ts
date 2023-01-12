import { registerEnumType } from '@nestjs/graphql';

export enum eDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(eDirection, {
  name: 'eDirection',
});
