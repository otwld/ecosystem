import { Pipe, PipeTransform } from '@angular/core';
import { JoinPipe } from './join.pipe';

@Pipe({
  name: 'joinObject',
  standalone: true,
})
export class JoinObjectPipe implements PipeTransform {
  private join = new JoinPipe().transform;

  transform<T>(value: T[], key: keyof T, separator = ', '): unknown {
    return this.join(
      value.map((v) => {
        if (typeof v[key] === 'string') {
          return v[key] as string;
        } else {
          return JSON.stringify(v[key]);
        }
      }),
      separator
    );
  }
}
