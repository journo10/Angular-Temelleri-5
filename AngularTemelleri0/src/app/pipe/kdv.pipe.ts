import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdvPipe',
})
export class KDVPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
}

//rate=>Oran , value=>O anki fiyat
