import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostlistModule } from '../postlist/postlist.module';
// import { PostlistModule } from '../postlist/postlist.module';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostlistModule],
  exports: [PostComponent],
})
export class PostModule {}
