import { Component } from '@angular/core';

type content ={
  name:string
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public contents=[
    {
      name:'Tracking'
    },
    {
      name:'OrderManagement'
    },
    {
      name:'DeliveryManagement'
    }
  ]
};
