import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return (value + 4*args[0] + 6*args[1]);
  }

}
