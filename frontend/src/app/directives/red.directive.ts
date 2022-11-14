import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {  //criando o elemento privado para acessar o atributo do elemento
    el.nativeElement.style.color = '#e35e6b'; //pega a cor do elemento e trasfomar para vermerlho
   }

}
