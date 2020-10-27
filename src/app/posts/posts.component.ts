import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private commonService: GetPostsService) {}

  posts: any = [];
  roughPosts: any = [];
  subscription: Subscription;
  ngOnInit() {
    this.getPosts();
    this.subscription = interval(2000).subscribe((val) =>
      this.getSelectPosts()
    );
  }
  getSelectPosts() {
    this.commonService.getSelectedPosts(this.posts[0].id, 1).subscribe(
      (response) => {
        const postItm = JSON.stringify(response);
        JSON.parse(postItm).forEach((element) => {
          let bool = false;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < this.roughPosts.length; i++) {
            if (element.id === this.roughPosts[i].id) {
              bool = true;
            }
          }
          if (!bool) {
            this.roughPosts.push(element);
          }
        });
      },
      (reject) => {
        this.getSelectPosts();
      }
    );
    this.roughPosts.sort((a, b) => b.id - a.id);
    this.posts = this.roughPosts;
  }

  getPosts() {
    this.commonService.getPosts().subscribe(
      (response) => {
        const postItm = JSON.stringify(response);
        JSON.parse(postItm).forEach((element) => {
            this.roughPosts.push(element);
        });
      },
      (reject) => {
        this.getPosts();
      }
    );
    this.roughPosts.sort((a, b) => b.id - a.id);
    this.posts = this.roughPosts;
  }

  onScroll() {
    this.commonService.getSelectedPosts(this.posts[this.posts.length - 1].id, -1)
      .subscribe(
        (response) => {
          const postItm = JSON.stringify(response);
          JSON.parse(postItm).forEach((element) => {
            let bool = false;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.roughPosts.length; i++) {
              if (element.id === this.roughPosts[i].id) {
                bool = true;
              }
            }
            if (!bool) {
              this.roughPosts.push(element);
            }
          });
        },
        (reject) => {
          this.onScroll();
        }
      );
    this.roughPosts.sort((a, b) => b.id - a.id);
    this.posts = this.roughPosts;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }
}
