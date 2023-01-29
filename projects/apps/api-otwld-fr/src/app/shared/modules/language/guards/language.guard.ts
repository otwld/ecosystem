import {ExecutionContext, Injectable} from '@nestjs/common';
import {AppLogger} from '../../logging/logging.service';
import {Reflector} from '@nestjs/core';
import {GqlExecutionContext} from '@nestjs/graphql';
import {Observable} from 'rxjs';
import {GraphQLError} from 'graphql';
import {HeaderLanguage} from '../enums/language.enum';

@Injectable()
export class LanguageGuard {
  constructor(private logger: AppLogger, private reflector: Reflector) {
    this.logger.setContext(LanguageGuard.name);
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const language = gqlContext.isWebSocket ? gqlContext['language'] : gqlContext.req.headers['language'];
    this.logger.verbose('setting language to ' + language);
    if (!language) {
      throw new GraphQLError('Language is required');
    }
    if (language !== HeaderLanguage.EN && language !== HeaderLanguage.FR) {
      throw new GraphQLError('Language is invalid');
    }
    gqlContext.language = language;
    return true;
  }
}
