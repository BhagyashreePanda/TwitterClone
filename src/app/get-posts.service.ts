import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  basrUrl = 'bumble-twitter-interview.herokuapp.com/bhagyashree-panda';
  constructor( private http: HttpClient ) { }
  getPosts() {
    return this.http.get(`http://bumble-twitter-interview.herokuapp.com/bhagyashree-panda/api?count=20`);
  }
  getSelectedPosts(id, direction) {
    return this.http.get(`http://bumble-twitter-interview.herokuapp.com/bhagyashree-panda/api?count=20&id=${id}&direction=${direction}`);
  }
}
