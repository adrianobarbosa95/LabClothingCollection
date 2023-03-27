import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {
  // unknown
  transform(value: string): string {
     
    return value.split('@')[0];

  }

}
