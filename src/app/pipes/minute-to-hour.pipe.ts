import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToHour'
})
export class MinuteToHourPipe implements PipeTransform {

  transform(minute: any, args?: any): string {
    let h = 0;
    let m = 0;

    if (minute > 60) {
      m = minute % 60;
      h = Math.round(minute / 60);
      return `${h}h ${m}m`;
    } 

    return `${m}m`;
  }

}
