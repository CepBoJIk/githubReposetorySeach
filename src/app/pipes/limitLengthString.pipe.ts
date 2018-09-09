import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitLength'})
export class LimitLength implements PipeTransform {
  transform(value: string): string {
    let result = value;
    if (!result) return result;
    if (result.length > 500) {
      result = result.slice(0, 500) + ' ...';
    }
    return result;
  }
}