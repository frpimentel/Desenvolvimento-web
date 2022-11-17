import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  //quando o serviçe é injetando por 'root' ele é um singleton
  //singleton ="é instanciando por apenas uma vez, e sempre que um valor for alterado, ele vai compartilhar todas as vezes que o serviçe for chamado"
  providedIn: 'root'
})



export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string): void{
    // snackbar é uma função injentada pelo MatSnackBar onde você pode mostrar na tela uma mensagem
    //com os seguintes argumentos (texto, action e configurações da mensagem )
    this.snackBar.open(msg,'close',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    //faz um requisição http
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(id: string): Observable<Product>{
    
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  update(product : Product): Observable<Product>{
    
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
