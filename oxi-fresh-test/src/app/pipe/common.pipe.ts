import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common', 
  pure: false
})
export class CommonPipe implements PipeTransform {

  transform(value: Object): Array<string> { return Object.keys(value); }

}


