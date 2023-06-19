import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interFaces'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Book[], args: string): Book[] {
    if (value) {
      return value.sort((a: Book, b: Book) => {
        if (a[args as keyof Book] < b[args as keyof Book]) {
          return -1;
        } else if (b[args as keyof Book ] < a[args as keyof Book]) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }

}
