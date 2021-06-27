import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter',
})
export class ConverterPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1000;

      case 'cm':
        return value * 100000;

      default:
        throw new Error('Target Unit unidentified');
    }
  }
}

// ...args means take whatever arguments provided
// to transform function and put them all in single array
// (value: any, ...args: any[]): any
