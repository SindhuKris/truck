import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:':type',
    component:ContentComponent
  },
  {
    path:'**',
    redirectTo:'content'
  }
]
@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class ContentModule { }
