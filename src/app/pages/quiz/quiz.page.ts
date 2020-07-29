import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.page.html',
  styleUrls: ['quiz.page.scss'],
})
export class QuizPage {

  itemList=[];

  selectedtab: string;
  selectedQ: string;
  selectedmake: string;

  constructor() {
    this.selectedtab = 'challenge';
    this.selectedQ = '0';
    this.selectedmake = '0';
  }

  ionViewWillEnter(){
    this.itemList = [
      'アクタージュのクイズ','メイドインアビスのクイズ','ごとうぶんの花嫁クイズ',
      'ご注文はうさぎですか？クイズ'
    ];
  }

  async getItems(ev: any){
    let value = ev.target.value; //イベントを発生させたオブジェクトのvalueつまり入力した文字
    if(value === ''){
      this.itemList = [
        'アクタージュのクイズ','メイドインアビスのクイズ','ごとうぶんの花嫁クイズ',
        'ご注文はうさぎですか？クイズ'
      ];
    }
    // if the value is an empty string don't filter the items
    if(value !== ''){
      this.itemList = this.itemList.filter((item) => {
        //前方一致
        /*if(value.match(/^[A-Za-z0-9]*$/)){
          return (item.toString().toLowerCase().indexOf(value.toLowerCase()) === 0);
        }else{
          return (item.toString().toLowerCase().indexOf(value.toLowerCase()) === 0);
        }*/
        //部分一致
        if (value.match(/^[A-Za-z0-9]*$/)) {
          return (item.toLowerCase().indexOf(value));
        } else {
          return (item.toLowerCase().indexOf(value));
        }
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

