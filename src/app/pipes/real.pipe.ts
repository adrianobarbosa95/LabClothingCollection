import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real'
})
export class RealPipe implements PipeTransform {

  transform(valor: string, simbolo?: boolean): string {
    return !simbolo ? Number.parseFloat(valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) :
      Number.parseFloat(valor).toLocaleString('pt-br');
  }

}
