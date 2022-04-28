import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, searchTerm: string): any {
  //   return value.filter( (search) => {
  //     return search.name.toLowerCase().indexof(searchTerm.toLowerCase()) > -1
  //   } );
  // }

  transform(value: string) {
      return value.split('').splice(0, 30).join('').trim()
  }

}
