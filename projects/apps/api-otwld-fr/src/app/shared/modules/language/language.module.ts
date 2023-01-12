import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Translation, TranslationSchema} from './models/translation.model';

@Module({
  imports: [MongooseModule.forFeature([{name: Translation.name, schema: TranslationSchema}])]
})
export class LanguageModule {

}
