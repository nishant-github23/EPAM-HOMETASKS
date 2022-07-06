import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullname'
})
export class UserFullnamePipe implements PipeTransform {

  transform(firstName: string,...lastName:string[]): string {
    return firstName +" "+ lastName.join(" ");
  }

}
