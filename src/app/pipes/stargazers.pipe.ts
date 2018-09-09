import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stargazers'})
export class StargazersPipe implements PipeTransform {
  transform(value: number): string {
    const numberString = String(value);
    if (numberString.length > 3) {
      const numberArray: Array<string> = numberString.split('');
      numberArray.splice(numberArray.length - 3, 3);
      return `${numberArray.join('')}k`;
    }
    return String(value);
  }
}