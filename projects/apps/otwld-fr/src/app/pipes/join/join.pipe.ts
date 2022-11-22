import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true
})
export class JoinPipe implements PipeTransform {

  transform(value: string[], separator = ', '): unknown {
    return value.join(separator);
  }

}
