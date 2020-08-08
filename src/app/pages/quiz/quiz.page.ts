import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '@/models';
import { Comment } from '@/models/comment';
import { Quiz } from '@/models/quiz';
import { BookService } from '@/services';
import { CommentService } from '@/services/comment.service';
import { QuizService } from '@/services/quiz.service';
import { AppState } from '@/store';
import { selectBooks } from '@/store/book.store';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage implements OnInit {

  allquizzes: Quiz[];
  quizzes: Quiz[];

  comments: Comment[];

  selectednum: number; // 選択された番号
  correctnum: number; // 正解数
  // クイズ作成
  quiz: Quiz = {
    id: '',
    title: '',
    maker: '',
    Q: '',
    choices: [],
    correct: 1,
  };

  // コメント作成
  comment: Comment = {
    id: '',
    maker: '',
    content: '',
    star: 0,
  };

  selectedtab: string;
  selectedQ: string;
  selectedmake: string;

  searchedBooks$: Observable<Array<Book>>;

  constructor(
    private store: Store<AppState>,
    private quizService: QuizService,
    private commentService: CommentService,
    private bookService: BookService,
  ) {
    this.selectedtab = 'make';
    this.selectedQ = '0';
    this.selectedmake = '0';
    this.correctnum = 0;
    this.searchedBooks$ =　this.store.pipe(select(selectBooks));
  }

  ngOnInit() {
    this.getQuizzes();
    this.getComments();
  }

  getQuizzes(): void {
    this.allquizzes = this.quizService.getQuizzes();
    this.quizzes = this.quizService.getQuizzes();
  }

  getComments(): void {
    this.comments = this.commentService.getComments();
  }

  // クイズ追加
  addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
  }

  // 選択肢番号返す
  selectbutton(num: number) {
    this.selectednum = num;
  }

  // 選択肢と答え合致数
  matchChoices() {
    if (this.selectednum === this.quiz.correct) {
      this.correctnum += 1;
    }
    return this.correctnum;
  }

  // コメント追加
  addComment(comment: Comment) {
    if (comment.content !== '') {
      this.comments.push(comment);
    }
  }

  async searchBooks(ev: any) {
    const value = ev.target.value; // イベントを発生させたオブジェクトのvalueつまり入力した文字
    this.searchedBooks$ = value ? this.bookService.searchFromLocalStore(value) : this.store.pipe(select(selectBooks));
  }

  onSelectTab(tab: string) {
    this.selectedtab = tab;
  }

  onNext(question: string) {
    this.selectedQ = question;
  }

  onMake(make: string) {
    this.selectedmake = make;
  }
  segmentChanged(ev: any) {
    return;
  }
}

