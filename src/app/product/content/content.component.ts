import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  path!:string;

  constructor(
    public activeRouter:ActivatedRoute
  ){
    this.activeRouter.paramMap
    .subscribe((data:any)=>{
      this.path= data.get('type');
    })
  };
}
