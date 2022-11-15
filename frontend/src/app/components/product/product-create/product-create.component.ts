import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void{ //E chamado a função create passando um produto, dando resnponsabilidade ao
    //obsevable vigia esta função para quando ela vou usada exibir uma mensagem e mudar a rota
    this.ProductService.create(this.product).subscribe(() =>{
      this.ProductService.showMessage('Operação execuada com sucesso')
      this.router.navigate(['/products'])
    })

  }
  cancel():void{
    this.router.navigate(['/products'])

  }
}
