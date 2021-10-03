import { Product } from './../models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    //**İsme göre arama yapar.
    return filterText? value.filter(
          (p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1)
      : value;  
   }
} 

//***İsme ve açıklamaya göre arama yapar****.
// return filterText?value
// .filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||
//          p.description.toLocaleLowerCase().indexOf(filterText) !== -1): value;

