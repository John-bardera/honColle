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
      },
      {
        text: '風見雄二が昔飼っていた犬の名前は？',
        choices: ['ジョン',
          'ジョニー',
          'ジャック'],
        correct: 0,
      }
    ],
    comments: [
      {
        maker: 'John',
        star: 4,
        content: 'さすが名作'
      }
    ],
    book: {
      id: '9784054064010',
      isbn: '9784054064010',
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
  {
    id: '',
    title: 'Angularクイズ',
    maker: 'John Doe',
    questions: [
      {
        text: '「npm」。黒木はなんて読む？',
        choices: ['なぷむ',
          'えぬぴーえむ',
          'なぱーむ'],
        correct: 2,
      },
      {
        text: 'Angularのロゴのメインの色は何色？',
        choices: ['赤',
          '青',
          '緑'],
        correct: 0,
      }
    ],
    comments: [
      {
        maker: 'John',
        star: 5,
        content: 'Angular何もわからん'
      },
      {
        maker: '井の中の蛙',
        star: 5,
        content: 'Angular完全に理解した'
      }
    ],
    book: {
      id: '9784774191300',
      isbn: '9784774191300',
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
  {
    id: '',
    title: 'ワンピースのクイズ',
    maker: '競馬オタク',
    questions: [
      {
        text: 'ルフィが最初に仲間にしたのはだれ？',
        choices: ['ゾロ',
          'サンジ',
          'ナミ'],
        correct: 1,
      },
      {
        text: 'チョッパーが食べた悪魔の実は？',
        choices: ['モフモフの実',
          'ヒトヒトの実',
          'ツノツノの身'],
        correct: 2,
      }
    ],
    comments: [
      {
        maker: '朝昼晩',
        star: 2,
        content: '簡単すぎる'
      }
    ],
    book: {
      id: '9784088702179',
      isbn: '9784088702179',
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
  {
    id: '',
    title: '五等分の花嫁のクイズ',
    maker: '競馬オタク',
    questions: [
      {
        text: '幼少期の上杉風太郎と出会ったのは5つ子の誰と誰？',
        choices: ['一花と四葉',
          '三玖と四葉',
          '四葉と五月'],
        correct: 1,
      },
      {
        text: '文化祭で三玖が担当した屋台は？',
        choices: ['からあげ',
          'たこやき',
          'パンケーキ'],
        correct: 2,
      },
      {
        text: '上杉風太郎が学食でよく頼むメニューは？',
        choices: ['唐揚げ定食唐揚げ抜き',
          'かき揚げ定食かき揚げ抜き',
          '焼肉定食焼肉抜き'],
        correct: 3,
      }
    ],
    comments: [],
    book: {
      id: '9784065102497',
      isbn: '9784065102497',
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
  {
    id: '',
    title: 'メイドインアビスのクイズ',
    maker: '競馬オタク',
    questions: [
      {
        text: '殲滅卿のライザが使っていたブリーズリーブの漢字表記は？',
        choices: ['無尽槌',
          '無限槌',
          '殲滅槌'],
        correct: 1,
      },
      {
        text: '白笛の原料である遺物は？',
        choices: ['ファーカレス',
          'スパラグモス',
          'ユーアワース'],
        correct: 3,
      },
      {
        text: '深海4層の上昇負荷は？',
        choices: ['全身の穴という穴から流血',
          '平衡感覚の異常　幻覚　幻聴',
          '全感覚の喪失　意識混濁　自傷行為'],
        correct: 1,
      }
    ],
    comments: [
      {
        maker: '朝昼晩',
        star: 5,
        content: 'いい問題だ'
      }
    ],
    book: {
      id: '9784812483800',
      isbn: '9784812483800',
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
];
