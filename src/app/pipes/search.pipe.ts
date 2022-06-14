import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: any[], searchTerm: string, property: string):any[] {
  //   const result: any = []

  //   if (!value || searchTerm === '' || property === '') {
  //     return value
  //   }
  //   value.forEach((a: any) => {
  //     if (a[property].trim().toLowerCase().includes(searchTerm.toLowerCase())) {
  //       result.push(a)
  //     }
  //   })
  //   return result
  // }


  transform(value: any[], searchTerm: string) {
    const result: any[] = value.filter((search) => {
      return search.name ? search.name.toLowerCase().includes(searchTerm.toLowerCase()) : search.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    if (!value || searchTerm === '') {
      return value
    } else {
      return result
    }
  }
}

// search.name.toLowerCase().includes(searchTerm.toLowerCase())
