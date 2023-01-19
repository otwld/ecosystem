import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Translation, TranslationSchema} from './models/translation.model';
import {LanguageGuard} from './guards/language.guard';

@Module({
  imports: [MongooseModule.forFeature([{name: Translation.name, schema: TranslationSchema}])],
  providers: [LanguageGuard],
  exports: [LanguageGuard]
})
export class LanguageModule {

}
