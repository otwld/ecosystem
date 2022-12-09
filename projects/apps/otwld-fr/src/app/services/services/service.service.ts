import { Injectable } from '@angular/core';
import { SERVICE_DATA } from '../../../data/service.data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  getAll() {
    return of(SERVICE_DATA);
  }

  findOneByRoute(route: string) {
    return of(SERVICE_DATA.find((service) => service.route.includes(route)));
  }
}

