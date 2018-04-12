+++
date = "2017-03-28T11:12:37+09:00"
title = "ブログを組み立てた"
tags = ["hugo", "firebase"]
+++

個人のウェブサイトを兼ねて、ブログを組み立てた。

きっと「いろいろ実験するだろう」と踏んで、特定のblogging serviceに依存するのを避けた。気に入ったblogging serviceがなかったというのもある。

また、間違ったことを言っていたらマサカリを投げて欲しいなとも思った。GitHubにsourceがあれば、IssueやPull Requestを通じて、フィードバックがもらえるかもしれない、という期待もできる。

## Hugo

static website generatorとして[Hugo](https://gohugo.io/)を利用した。HexoとかJekyllもあるけど、よほど変なURLで吐かれなければなんでもいいと思った。いずれ何かに満足できなくなって自分でブログエンジン作るかもしれないし。

## Firebase

ホスティング先として[Firebase](https://firebase.google.com/)を選んだ。GitHubでホスティングする際の`gh-pages`ブランチによる運用が嫌だった。`master`ブランチが更新されたら、CIによって自動的にウェブサイトも最新の状態になって欲しい。Firebaseだと最初からHTTPSに対応しているし良いなと思った。

[GitHub上のリポジトリ](https://github.com/axross/axross.io)にCircle CIを連携させて、`master`ブランチが更新されたら`hugo`でHTMLやメタファイルを生成して、`firebase deploy`するようにした。気になる人は[circle.yml](https://github.com/axross/axross.io/blob/master/circle.yml)を見てもらえばわかると思う。

Firebaseの管理コンソールのCLIクライアントである[`firebase-tools`](https://github.com/firebase/firebase-tools)には[`login:ci`](https://github.com/firebase/firebase-tools/pull/71)というコマンドがあって、これを使うとCIなど環境で用いるためのbearer tokenを発行できる。

叩くとこんな感じ。ブラウザが立ち上がって、Googleアカウントでのログインが求められる。

```
🍣  ./node_modules/.bin/firebase login:ci

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=000000000&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

✔  Success! Use this token to login on a CI server:

1/0123456789abcdef0123456789ABCDEF0123456789a

Example: firebase deploy --token "$FIREBASE_TOKEN"
```

すると、`1/0123456789abcdef0123456789ABCDEF0123456789a`のようなbearer tokenが発行される。これをCircle CIなどの環境変数に入れておいて、`firebase deploy --token $FIREBASE_TOKEN`のように使う。

いつまで続くかわからないけど、書くところを確保したのであとは書くだけ、という気持ちでアウトプットを増やしていきたい。
