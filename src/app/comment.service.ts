import { Injectable } from '@angular/core';

import {Comment} from './comment';
import {COMMENTS} from './mock-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Comment[]{
    return COMMENTS;
  }
}
