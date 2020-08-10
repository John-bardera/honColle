import { Quiz } from '@/models';

// サーバーからデータが帰ってきたと仮定してのクイズ配列
// 本の名前やサムネなども後々追加
export const QUIZZES: Array<Quiz> = [
  {
    id: '',
    title: 'グリザイアの果実クイズ',
    maker: 'ゆうじ',
    questions: [
      {
        text: '入巣蒔菜が使用している狙撃銃の名前は？',
        choices: ['M24 SWS',
          'バレットM82',
          '豆鉄砲Mk-Ⅱ'],
        correct: 1,
      }
    ],
    comments: [],
    book: {
      id: '4054064019',
      isbn: '4054064019',
      affiliateUrl: '',
      author: '',
      authorKana: '',
      itemCaption: '',
      itemUrl: '',
      largeImageUrl: '',
      limitedFlag: 0,
      mediumImageUrl: '',
      publisherName: '',
      seriesName: '',
      seriesNameKana: '',
      size: '',
      smallImageUrl: '',
      title: '',
      titleKana: '',
      isRead: false,
    }
  },
  /*{
    id: '',
    title: 'ごとうぶんの花嫁ノクイズ',
    maker: 'フウタロー',
    Q: '幼少期の上杉風太郎とあった五つ子はだれとだれ？',
    choices: ['一花と四葉',
      '四葉と五月',
      '五月と三玖'],
    correct: 1,
  },
  {
    id: '',
    title: 'ご注文はうさぎですか？の問題',
    maker: 'おにぎり',
    Q: 'ティッピーの品種は？',
    choices: ['ネザーランドドワーフ',
      'レッキス',
      'アンゴラウサギ'],
    correct: 3,
  },*/
];
