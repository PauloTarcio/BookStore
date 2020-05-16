import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatcaoCnpj'
})
export class FormatcaoCnpjPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
