import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funkycase',
})
export class FunkycasePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      return [...value]
        .map((character, index) =>
          index % 2 === 0
            ? String(character).toLowerCase()
            : String(character).toUpperCase()
        )
        .join('');
    }

    return value;
  }
}
