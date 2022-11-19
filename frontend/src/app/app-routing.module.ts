import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  // adiciona as rotas para que os component possa se alterar na tela
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",//colocando dois pontos na frente de um texto ele entende como variavel
    component: ProductUpdateComponent

  },
  {
    path: "products/remove/:id",
    component: ProductDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
