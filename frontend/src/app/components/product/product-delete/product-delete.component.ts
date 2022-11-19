import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
        this.product = product
    });
  }

  delete(): void{
    this.productService.deleteByid(this.product).subscribe( () => {
      this.productService.showMessage("o produto foi deletado!");
      this.router.navigate(['/products']);
    });
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
