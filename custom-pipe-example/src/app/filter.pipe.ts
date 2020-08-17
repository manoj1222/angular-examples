import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let searchName:string = args[0];
    if(searchName === "") {
      return value;
    }

    let playerArr: any[]=[]
    for (const player of value) {
      let teamName: string = player.team
      if(teamName.toLowerCase().startsWith(searchName.toLowerCase())) {
        playerArr.push(player);
      }
    }

    return playerArr;
  }

}
