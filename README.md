# honColle

## 開発の流れ

### branchを切る・移動する
```$shell
# hoge branchの作成
git branch hoge

# branchの移動
git checkout hoge

# ここでbranchの確認
git branch
```

これが終わったらファイルを変更する

### commitする
```$shell
# ./以下のファイルの変更記録をgitに報告する
git add ./

# addした変更記録を1つのまとまりとして報告する
# この1つのまとまりをcommitと言う
git commit -m "message"

# commitをリモート上に反映する
git push origin ${branch名}

# push時に出てくるpull request作成URLからPRを作成しておく
```

### pull requestがMergeされたら
```$shell
# リモート上の記録と同期する
git fetch

# リモートの情報を読み込む
# この時、自分がmaster branchに本当にいるのか確認
git pull origin master
```

