import { Component, OnInit } from '@angular/core';

import {Quiz} from '../../quiz';
import {QuizService} from '../../quiz.service';

import {Comment} from '../../comment';
import {CommentService} from '../../comment.service';


@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage implements OnInit{

  allquizzes: Quiz[];
  quizzes:  Quiz[];

  comments: Comment[];

  selectednum: number; //選択された番号
  correctnum: number; //正解数
  //クイズ作成
  quiz: Quiz = {
    title: '',
    maker: '',
    Q: '',
    choices: [],
    correct: 1,
  };

  //コメント作成
  comment: Comment = {
    maker: '',
    content: '',
    star: 0,
  };

  selectedtab: string;
  selectedQ: string;
  selectedmake: string;

  constructor(private quizService: QuizService, private commentService: CommentService) {
    this.selectedtab = 'make';
    this.selectedQ = '0';
    this.selectedmake = '0';
    this.correctnum = 0;
  }

  ngOnInit(){
    this.getQuizzes();
    this.getComments();
  }

  getQuizzes():void{
    this.allquizzes = this.quizService.getQuizzes();
    this.quizzes = this.quizService.getQuizzes();
  }

  getComments():void{
    this.comments = this.commentService.getComments();
  }

  //クイズ追加
  addQuiz(quiz: Quiz){
    this.quizzes.push(quiz);
  }

  //選択肢番号返す
  selectbutton(num: number){
    this.selectednum = num;
  }

  //選択肢と答え合致数
  matchChoices(){
    if(this.selectednum == this.quiz.correct){
      this.correctnum += 1;
    }
    return this.correctnum;
  }

  //コメント追加
  addComment(comment: Comment){
    if(comment.content != ''){
      this.comments.push(comment);
    }
  }

  async getItems(ev: any){
    let value = ev.target.value; //イベントを発生させたオブジェクトのvalueつまり入力した文字
    if(value === ''){
      this.allquizzes;
    }
    // if the value is an empty string don't filter the items
    if(value !== ''){
      this.quizzes = this.allquizzes.filter((quiz) => {
        //前方一致
        /*if(value.match(/^[A-Za-z0-9]*$/)){
          return (item.toString().toLowerCase().indexOf(value.toLowerCase()) === 0);
        }else{
          return (item.toString().toLowerCase().indexOf(value.toLowerCase()) === 0);
        }*/
        //部分一致
          return (quiz.title.toLowerCase().includes(value));
      });
    }
  }

  onSelectTab(tab: string){
    this.selectedtab = tab;
  }
  
  onNext(question: string){
    this.selectedQ = question;
  }

  onMake(make: string){
    this.selectedmake = make;
  }
}

