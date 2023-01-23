import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {CurrentLanguage} from '../../language/decorators/current-language.decorator';
import {HeaderLanguage} from '../../language/enums/language.enum';
import {Location} from '../models/location.model';

@Resolver(() => Location)
export class LocationResolver {
  @ResolveField('city', () => String)
  resolverCity(@Parent() location: Location, @CurrentLanguage() lang: HeaderLanguage) {
    return location.city[lang];
  }
  @ResolveField('country', () => String)
  resolverCountry(@Parent() location: Location, @CurrentLanguage() lang: HeaderLanguage) {
    return location.country[lang];
  }

  @ResolveField('fullLocation', () => String)
  resolverFullLocation(@Parent() location: Location, @CurrentLanguage() lang: HeaderLanguage) {
    return `${location.city[lang]}, ${location.country[lang]}`;
  }

}
