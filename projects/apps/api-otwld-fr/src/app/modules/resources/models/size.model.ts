import {registerEnumType} from '@nestjs/graphql';

export enum ResourceSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  ORIGINAL = 'ORIGINAL',
}

registerEnumType(ResourceSizes, {name: 'ResourceSizes'});
