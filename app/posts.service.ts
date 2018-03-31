import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor() { 

  }

  getPosts(){
    return ['This is a first post','This is a second post'];
  }

}
