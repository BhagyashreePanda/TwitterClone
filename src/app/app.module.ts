import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardsComponent } from './post-cards/post-cards.component';
import { GetPostsService } from './get-posts.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PostsComponent, PostCardsComponent],
  imports: [BrowserModule, HttpClientModule, InfiniteScrollModule, AppRoutingModule],
  providers: [ GetPostsService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
