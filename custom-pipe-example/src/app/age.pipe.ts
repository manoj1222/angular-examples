import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var valueYear = new Date(value).getFullYear();
    var currentYear = new Date().getFullYear();
    return (currentYear - valueYear);
  }

}
