import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriesComponent } from './industries.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:'',
    component:IndustriesComponent,
  }
]

@NgModule({
  declarations: [
    IndustriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class IndustriesModule { }
