import { NgModule } from '@angular/core';
import { BookService } from './book.service';
// import { HogeService } from './hoge.service';

@NgModule({
  providers: [
    // HogeService,
    BookService,
  ],
})

export class ServicesModule {}
