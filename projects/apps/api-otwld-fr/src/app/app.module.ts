import {Module} from '@nestjs/common';
import {join} from 'path';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import main from '../config/main.config';
import mongodb from '../config/mongodb.config';
import s3 from '../config/s3.config';
import {MemberModule} from './modules/members/member.module';
import {MemberService} from './modules/members/services/member.service';
import {AppLogger} from './shared/modules/logging/logging.service';
import {LoggingModule} from './shared/modules/logging/logging.module';
import {PaginationModule} from './shared/modules/pagination/pagination.module';
import {ServiceModule} from './modules/services/service.module';
import {LanguageModule} from './shared/modules/language/language.module';
import log from '../config/log.config';
import {SkillService} from './modules/skills/services/skill.service';
import {createSkillsLoader} from './shared/loaders/skills.loader';
import {SkillModule} from './modules/skills/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [main, mongodb, s3, log],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (conf: ConfigService) => ({
        uri: conf.get('mongodb.uri'),
        retryAttempts: 3,
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [
        ConfigModule,
        MemberModule,
        ServiceModule,
        SkillModule
      ],
      // WARN: Each argument comes in order with provider's order
      useFactory: (
        conf: ConfigService,
        skillService: SkillService,
        logger: AppLogger
      ) => ({
        debug: conf.get('log.graphqlDebug'),
        playground: conf.get('graphqlPlayground'),
        autoSchemaFile: join(process.cwd(), 'projects/apps/api-otwld-fr/src/schema.gql'),
        sortSchema: true,
        installSubscriptionHandlers: false,
        /*subscriptions: {
          'subscriptions-transport-ws': {
            onConnect: (connectionParams) => {
              return {
                isWebSocket: true,
                authorization: connectionParams.Authorization || connectionParams.authorization,
              };
            },
          },
        },*/
        context: () => {
          logger.setContext('GraphQL-Context');
          return {
            skillLoader: createSkillsLoader(logger, skillService),
            /*categoryLoader: createCategoryLoader(logger, categoryService),
            eventLoader: createEventLoader(logger, eventService),
            organizationLoader: createOrganizationLoader(logger, organizationService),
            passportUserLoader: createPassportUserLoader(logger, passportUserService),
            professionalLoader: createProfessionalLoader(logger, professionalService),
            seniorLoader: createSeniorLoader(logger, seniorService),
            specialityLoader: createSpecialityLoader(logger, specialityService),*/
          };
        },
      }),
      inject: [
        ConfigService,
        SkillService,
        AppLogger,
        MemberService
      ],
    }),

    /* ======== GLOBAL ======== */
    LoggingModule,

    /* ======== MODULES ======== */
    MemberModule,
    PaginationModule,
    ServiceModule,
    SkillModule,
    LanguageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
