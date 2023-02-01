import {INestApplication} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MemberModule} from '../src/app/modules/members/member.module';
import {ServiceModule} from '../src/app/modules/services/service.module';
import {SkillModule} from '../src/app/modules/skills/skill.module';
import {WorkModeModule} from '../src/app/modules/workModes/workMode.module';
import {MediaModule} from '../src/app/modules/medias/media.module';
import {ProjectModule} from '../src/app/modules/projects/project.module';
import {ResourcesModule} from '../src/app/modules/resources/resources.module';
import {TestimonialModule} from '../src/app/modules/testimonials/testimonial.module';
import {ClientModule} from '../src/app/modules/clients/client.module';
import {SkillService} from '../src/app/modules/skills/services/skill.service';
import {WorkModeService} from '../src/app/modules/workModes/services/workMode.service';
import {ProjectService} from '../src/app/modules/projects/services/project.service';
import {ServiceService} from '../src/app/modules/services/services/service.service';
import {TestimonialService} from '../src/app/modules/testimonials/services/testimonial.service';
import {MemberService} from '../src/app/modules/members/services/member.service';
import {ClientService} from '../src/app/modules/clients/services/client.service';
import {AppLogger} from '../src/app/shared/modules/logging/logging.service';
import {join} from 'path';
import {createSkillsLoader} from '../src/app/shared/loaders/skills.loader';
import {createWorkModesLoader} from '../src/app/shared/loaders/workModes.loader';
import {createProjectLoader} from '../src/app/shared/loaders/projects.loader';
import {createServicesLoader} from '../src/app/shared/loaders/services.loader';
import {createTestimonialsLoader} from '../src/app/shared/loaders/testimonials.loader';
import {createMemberLoader} from '../src/app/shared/loaders/members.loader';
import {createClientLoader} from '../src/app/shared/loaders/clients.loader';
import {LoggingModule} from '../src/app/shared/modules/logging/logging.module';
import {PaginationModule} from '../src/app/shared/modules/pagination/pagination.module';
import {LanguageModule} from '../src/app/shared/modules/language/language.module';
import {LocationModule} from '../src/app/shared/modules/location/location.module';
import * as request from 'supertest';
import {Test} from '@nestjs/testing';

describe('Cats', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GraphQLModule.forRootAsync<ApolloDriverConfig>({
        driver: ApolloDriver,
        imports: [
          ConfigModule,
          MemberModule,
          ServiceModule,
          SkillModule,
          WorkModeModule,
          MediaModule,
          ProjectModule,
          ResourcesModule,
          TestimonialModule,
          ClientModule,
        ],
        // WARN: Each argument comes in order with provider's order
        useFactory: (
          conf: ConfigService,
          skillService: SkillService,
          workModeService: WorkModeService,
          projectService: ProjectService,
          servicesService: ServiceService,
          testimonialService: TestimonialService,
          memberService: MemberService,
          clientService: ClientService,
          logger: AppLogger,
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
              workModeLoader: createWorkModesLoader(logger, workModeService),
              projectLoader: createProjectLoader(logger, projectService),
              serviceLoader: createServicesLoader(logger, servicesService),
              testimonialLoader: createTestimonialsLoader(logger, testimonialService),
              memberLoader: createMemberLoader(logger, memberService),
              clientLoader: createClientLoader(logger, clientService)
            };
          },
        }),
        inject: [
          ConfigService,
          SkillService,
          WorkModeService,
          ProjectService,
          ServiceService,
          TestimonialService,
          MemberService,
          ClientService,
          AppLogger,
        ],
      }),

        /* ======== GLOBAL ======== */
        LoggingModule,

        /* ======== MODULES ======== */
        MemberModule,
        PaginationModule,
        ServiceModule,
        SkillModule,
        WorkModeModule,
        LanguageModule,
        ProjectModule,
        TestimonialModule,
        ResourcesModule,
        LocationModule,
        MediaModule,
        ClientModule],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST graphql`, () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .expect(200)
  });

  afterAll(async () => {
    await app.close();
  });
});
