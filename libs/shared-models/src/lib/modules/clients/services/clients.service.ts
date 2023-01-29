import {inject, Injectable} from '@angular/core';
import {RequestWithTranslationUtils} from '../../../utils/request-with-translation.utils';
import {GetAllClientsGQL} from '../../../gateway/generated-api-gateway';
import {map, switchMap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClientsService extends RequestWithTranslationUtils {
  getAllClientsGql = inject(GetAllClientsGQL);

  getAllClients$() {
    return this.langChangeUpdate$().pipe(switchMap(() => {
      return this.getAllClientsGql.fetch();
    }), map((result) => result.data.getAllClients))
  }
}
