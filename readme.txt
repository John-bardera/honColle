# 使用方法
npm -g install npx ionic cordova
npm ci
npm run start

# 動作環境
node v12.16.1
npm v6.14.7

Ionic:
   Ionic CLI : 6.6.0

Utility:
   native-run (update available: 1.0.0) : 0.3.0
# フォルダについて
src/ - アプリ本体

src/app/ - アプリの核となる部分
src/assets/ - iconなど
src/environments/ - 環境変数用
src/http-interceptors/ - HttpClientの上書き
src/theme/ - アプリ全体のscss設定

src/app/apis/ - 外部と通信するTypescriptコードをまとめる場所(今回は、serviceにまとめたため特に記載無し)
src/app/components/ - コンポーネント
src/app/config/ - 定数や外部APIのIDなど
src/app/mock/ - 初期データ格納場所
src/app/models/ - interface宣言
src/app/pages/ - アプリのページまとめ。
src/app/services/ - アプリ全体で使うTypescriptコードを目的ごとに管理している
src/app/store/ - Rxjs

*/*/*/book.*.ts - 本について
*/*/*/quiz.*.ts - クイズ機能について
*/*/*/push.*.ts - 通知について
*/*/*/init.*.ts - 初期起動時について

src/app/pages/analytics/ - レポート機能のページ
src/app/pages/home/ - 本棚機能のページ
src/app/pages/quiz/ - クイズ機能のページ
src/app/pages/search/ - 検索機能のページ
src/app/pages/settings/ - 設定機能のページ
src/app/pages/tabs/ - footerのtabボタン用ページ
