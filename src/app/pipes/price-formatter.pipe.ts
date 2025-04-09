import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter',
  standalone: true,
})
export class PriceFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';

    return value.toLocaleString('hu-HU') + ' HUF';
  }
}
