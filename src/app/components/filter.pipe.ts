import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/models/user';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param users list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(users: User[], searchText: string): any[] {
    // if (!users) {
    //   return [];
    // }
    // if (!searchText) {
    //   return users;
    // }
    searchText = searchText.toLocaleLowerCase();

    return users.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}