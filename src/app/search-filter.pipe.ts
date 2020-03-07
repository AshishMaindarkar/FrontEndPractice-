import { Pipe, PipeTransform } from '@angular/core';
import { UserDetails } from './Shared/user-details';
import * as _ from 'lodash';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(UserDetailsData: UserDetails[], name: string) {

    if (!name || !UserDetailsData) {
      return UserDetailsData;
    }

    // return UserDetailsData.filter((items) => {
    //   return items.name.toLowerCase().includes(name.toLowerCase()) === true;
    // });
    // return UserDetailsData.filter(u => {
    //   return u.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    // });
    return _.filter(UserDetailsData, (u) => {
 return _.includes(_.toLower(u.name), _.toLower(name));
    });
  }

}

