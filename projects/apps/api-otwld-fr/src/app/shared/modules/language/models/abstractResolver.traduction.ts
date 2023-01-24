import {Parent} from '@nestjs/graphql';
import {CurrentLanguage} from '../decorators/current-language.decorator';
import {HeaderLanguage} from '../enums/language.enum';

export function createTranslationResolver<T>(field: string) {
// @ts-ignore
  return function translationResolver(@Parent() parent: T, @CurrentLanguage() language: HeaderLanguage) {
    return parent[field][language];
  };
}
