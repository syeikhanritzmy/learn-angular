import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist.component';

@NgModule({
  declarations: [PostlistComponent],
  imports: [CommonModule],
  exports: [PostlistComponent],
})
export class PostlistModule {}
