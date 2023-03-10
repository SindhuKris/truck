import { Component } from '@angular/core';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'truck';
  data:any;
  constructor(private postData: PostsService){}
  ngOnInit()
  {
    this.postData.getPosts().subscribe((result)=>{
      console.warn("result",result)
      this.data=result
    })
  }
}
