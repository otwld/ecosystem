import { inject, Pipe, PipeTransform } from '@angular/core';
import { JoinPipe } from './join.pipe';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'joinObject',
  standalone: true,
  pure: false
})
export class JoinObjectPipe implements PipeTransform {
  private join = new JoinPipe().transform;
  private translocoService = inject(TranslocoService);

  transform<T>(value: T[], key: keyof T, separator = ', '): unknown {
    return this.join(
      value.map((v) => {
        if (typeof v[key] === 'string') {
          return this.translocoService.translate(v[key] as string);
        } else {
          return JSON.stringify(v[key]);
        }
      }),
      separator
    );
  }
}
