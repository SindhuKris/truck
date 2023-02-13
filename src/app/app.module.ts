import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const route:Routes=[
  {
    path:'about',
    loadChildren:() => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'register',
    loadChildren:() => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'product',
    loadChildren:() => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path:'industries',
    loadChildren:() => import('./industries/industries.module').then(m => m.IndustriesModule)
  },
  {
    path:'resources',
    loadChildren:() => import('./resources/resources.module').then(m => m.ResourcesModule)
  },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
