import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: any[];

  constructor(public postsService: PostsService) {
    this.posts = this.postsService.getPosts();
  }
}
