import { Injectable, ConsoleLogger, LoggerService, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends ConsoleLogger implements LoggerService {
  constructor(private conf: ConfigService) {
    super();
  }

  nestApplicationInitiated() {
    this.log(`🚀  | Server listening to: http://localhost:${this.conf.get('port')}`, 'NestApplication');
    const v = this.conf.get('log.verbose');
    if (v) {
      this.verbose('💪  | Server verbose is activated. Happy coding', 'OWLogger');
    }
    if (this.conf.get('graphqlPlayground')) {
      this[v ? 'verbose' : 'log'](
        `🎰  | Graphql playground is available at: http://localhost:${this.conf.get('port')}/graphql`,
        'MDLogger',
      );
    }
  }

  log(message: unknown, context?: string) {
    if (context !== 'InstanceLoader') {
      super.log(message, context || this.context);
    }
  }

  setContext(context: string) {
    super.context = context;
  }

  warn(message: unknown, context?: string) {
    super.warn(message, context || this.context);
  }

  verbose(message: unknown, context?: string) {
    if (this.conf.get('log.debug')) {
      super.verbose(message, context || this.context);
    }
  }

  error(message: string, stack?: string, context?: string) {
    super.error(message, stack, context || this.context);
  }
}
