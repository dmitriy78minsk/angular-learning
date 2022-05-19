import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocalize'
})
export class DateLocalizePipe implements PipeTransform {

  transform(value: Date | string, ...args: unknown[]): string {
    if (typeof value === 'string') {
      try {
        return new Date(value).toLocaleDateString();
      } catch (error) {
        return value;
      }
    } else {
      return value instanceof Date ? value.toLocaleDateString() : value;
    }
  }

}
