import { Injectable } from '@angular/core';

import { COMMENTS } from '@/mock/mock-comments';
import { Comment } from '@/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Comment[] {
    return COMMENTS;
  }
}
