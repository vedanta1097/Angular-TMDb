import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value.length > 220) {
      return value.substring(0,220) + "...";
    } else {
      return value;
    }
  }
}
