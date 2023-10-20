import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstApp } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostModule } from './components/post/post.module';
// import { PostlistComponent } from './components/postlist/postlist.component';
@NgModule({
  declarations: [FirstApp, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule],
  providers: [],
  bootstrap: [FirstApp],
})
export class AppModule {}
