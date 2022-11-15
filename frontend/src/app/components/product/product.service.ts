import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable({
  //quando o serviçe é injetando por 'root' ele é um singleton
  //singleton ="é instanciando por apenas uma vez, e sempre que um valor for alterado, ele vai compartilhar todas as vezes que o serviçe for chamado"
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }
  showMessage(msg:string): void{
    // snackbar é uma função injentada pelo MatSnackBar onde você pode mostrar na tela uma mensagem
    //com os seguintes argumentos (texto, action e configurações da mensagem )
    this.snackBar.open(msg,'close',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }
}
