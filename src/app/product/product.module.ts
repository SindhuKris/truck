import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';


const route:Routes=[
  {
    path:'',
    component:ProductComponent,
    loadChildren:() => import('./content/content.module').then(m => m.ContentModule)
  }
]
@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class ProductModule { }
