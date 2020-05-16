import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatacaoNomeAutor'
})
export class FormatacaoNomeAutorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
