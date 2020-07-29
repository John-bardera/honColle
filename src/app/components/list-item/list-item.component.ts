import { Component, Input, OnInit } from '@angular/core';

import { Book } from '@/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {}

}
