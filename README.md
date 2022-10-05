# kickstart-front

## 目次
1. リポジトリをforkする
2. firebaseのプロジェクトを作成する
3. プロジェクトにアプリを作成する
4. Google PSIのAPIキーを取得する
5. Vercelにプロジェクトを作成して公開する
6. 公開したURLをfirebase側で許可する
7. developmentのデプロイの環境を用意する
8. ローカル開発環境の構築をする
9. mockサーバーのセットアップと起動
10. API GatewayのURLをセットする
11. デプロイ
12. API再構築の際の注意

## 1. リポジトリをforkする
### 1. githubからforkする。
fork先名は解りやすく同じ名前にして下さい。もし変更する場合は、以降`kickstart-front`を`変更した名前`に読み替えて作業をおこなって下さい。

### 2. ブランチの作成
forkした先のリポジトリに、`development`ブランチを作成して下さい。

## 2. firebaseのプロジェクトを作成する
- https://console.firebase.google.com/u/0/

### 1. プロジェクトを作成

<img src="https://user-images.githubusercontent.com/1023421/193396716-18544f03-922c-4d32-a137-94afa0fba348.png" width="400">

### 2. 名前を入力（なんでもいい）

<img src="https://user-images.githubusercontent.com/1023421/193396754-a465aa1f-aa31-4a13-be0b-25329b92a2e5.png" width="400">

### 3. 後からでも設定できるのでOFFにする

<img src="https://user-images.githubusercontent.com/1023421/193396914-50149456-33c0-4e9c-9d73-0465f9c92ff1.png" width="400">

### 4. 完成
<img src="https://user-images.githubusercontent.com/1023421/193397107-b901dad5-166e-4e48-a693-3d562c679186.png" width="400">

### 5. Authenticationを作成していく
<img src="https://user-images.githubusercontent.com/1023421/193397153-8a463518-28ad-4875-81a4-2af2545fcc79.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193397179-cfd6d65e-5755-4bcf-96e4-582b00489b8c.png" width="400">

### 6. Googleを選択

<img src="https://user-images.githubusercontent.com/1023421/193397284-95ab91a5-f16e-4c4a-aaaf-89e96db86c84.png" width="400">

### 7. 有効にしてメアドを入力して保存

<img src="https://user-images.githubusercontent.com/1023421/193397353-80cf99a7-3f83-4cd2-8235-bf306aec18c6.png" width="400">

### 8. 完了

<img src="https://user-images.githubusercontent.com/1023421/193397433-d89eaa2d-4fc3-44dc-bc8e-b9da196b9d83.png" width="400">

## 3. プロジェクトにアプリを作成する

<img src="https://user-images.githubusercontent.com/1023421/193398376-1dde0caf-814b-41da-aa3f-def88bcaf0c1.png" width="400">


<img src="https://user-images.githubusercontent.com/1023421/193398283-d5f81dbb-5fe4-44f3-82b6-c77af7aeb109.png" width="400">

### 1. 名前の設定（なんでもいい）

<img src="https://user-images.githubusercontent.com/1023421/193398499-fa7e2f6e-a764-43fc-b6e6-650866cf807f.png" width="400">

<a id='kickstart-front-3-1' />

### 2. npmを選択して進む
赤枠の情報は後ほど使用しますので、控えておいて下さい。

<img src="https://user-images.githubusercontent.com/1023421/193399089-fc580a0c-4dab-41fd-acf6-2ffbbcbf8044.png" width="400">

それぞれの環境で必要になる、以下のFirebaseの情報を収集します。2-2で取得した情報を忘れた場合は、以下の取得方法を参考にして値を控えて下さい。
| 参照名 | 使用箇所 | 取得方法 | ステータス |
| :--- | :--- | :--- | :--- |
| apiKey | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| authDomain | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| projectId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| storageBucket | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| messagingSenderId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| appId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| PSI apiKey | front / github acstions / secrets | 4の手順を参考に再発行 |  |
| Vercel development url | front / github acstions / secrets | versel / Settings / Domains |  |
| Vercel production url | front / github acstions / secrets | versel / Settings / Domains |  |


## 4. Google PSIのAPIキーを取得する

### 1. サイトにアクセス
https://developers.google.com/speed/docs/insights/v5/get-started

<img src="https://user-images.githubusercontent.com/1023421/193399235-e26e4a63-2856-4dbd-b2ca-7f64ac563b1c.png" width="400">

### 2. 2で作成したプロジェクトを選択して作成

<img src="https://user-images.githubusercontent.com/1023421/193399300-e8b3e3ff-3d92-4526-a813-291e43960a57.png" width="400">

### 3. APIキーを取得する
この内容はメモしておいて下さい。

<img src="https://user-images.githubusercontent.com/1023421/193399373-11be433f-dd69-4888-8ebc-9c17054e24ad.png" width="400">

| 参照名 | 使用箇所 | 取得方法 | ステータス |
| :--- | :--- | :--- | :--- |
| apiKey | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| authDomain | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| projectId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| storageBucket | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| messagingSenderId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| appId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| PSI apiKey | front / github acstions / secrets | 4の手順を参考に再発行 | 取得済 |
| Vercel development url | front / github acstions / secrets | versel / Settings / Domains |  |
| Vercel production url | front / github acstions / secrets | versel / Settings / Domains |  |


## 5. Vercelにプロジェクトを作成する

### 1. サイトにアクセス
https://vercel.com/dashboard

### 2. プロジェクトを作成

<img src="https://user-images.githubusercontent.com/1023421/193399755-da17175b-13e4-47c9-8efa-0b38a66471a2.png" width="400">

### 3. gitHubと連携

<img src="https://user-images.githubusercontent.com/1023421/193399800-e055c90a-60cf-4809-941c-c94d5f5ece03.png" width="400">

### 4. 連携するプロジェクト名を入力して検索
権限がないため、権限を追加する必要がある。

<img src="https://user-images.githubusercontent.com/1023421/193400014-ae5ae9a7-5214-4718-aa93-71d686f88bb4.png" width="400">

### 5. 今回forkしたオーガニゼーション（アカウント）を選択

<img src="https://user-images.githubusercontent.com/1023421/193400059-fa8888a3-0634-4469-84ff-e566cae654b7.png" width="400">

### 6. kickstart-frontのリポジトリを選択

<img src="https://user-images.githubusercontent.com/1023421/193400299-07c3a7c0-3f94-4e6f-992c-ba4af70c68b3.png" width="400">

### 7. Vercelにリポジトリをインポート
権限を追加したのでインポートできるようになったので、インポートします。

<img src="https://user-images.githubusercontent.com/1023421/193400346-53d90aef-ff30-42b0-813f-8500125fa877.png" width="400">

### 8. 環境変数をセットしていきます

<img src="https://user-images.githubusercontent.com/1023421/193400549-cc1f95ef-736f-4ad7-a230-e0735b8033f5.png" width="400">

3-2で取得した値を以下の変数名で入力していきます。

| 変数名 | 3-2の参照名 |
| :--- | :--- |
| NEXT_PUBLIC_FIREBASE_API_KEY | apiKey |
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN | authDomain |
| NEXT_PUBLIC_FIREBASE_PROJECT_ID | projectId |
| NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET | storageBucket |
| NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID | messagingSenderId |
| NEXT_PUBLIC_FIREBASE_APP_ID | appId |

### 9. デプロイします

<img src="https://user-images.githubusercontent.com/1023421/193400888-3bb9f897-2363-4ed7-a6c2-259243f36cce.png" width="400">

### 10. 「Congratulations!」成功です
ダッシュボードに戻ります。

<img src="https://user-images.githubusercontent.com/1023421/193401142-6e2eb8b9-334c-46e3-8df4-169cd4d888e2.png" width="400">

### 11. 公開されたURLで表示されることを確認します。

<img src="https://user-images.githubusercontent.com/1023421/193401238-b14f390d-3e72-45da-bf50-48196a8e5c15.png" width="400">

## 6. 公開したURLをfirebase側で許可する

### 1. Vercelから与えられたドメインを確認する
<img src="https://user-images.githubusercontent.com/1023421/193401804-ffb42c14-3915-4930-b7b8-553a0c86d3d3.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193401843-d91a38bc-8775-4aae-95d9-c9fd1ef1dba8.png" width="400">

このURLをFirebase側で許可するので、控えておいて下さい。
<img src="https://user-images.githubusercontent.com/1023421/193401948-7a2872d5-be1c-4ba3-9f10-8424e0bbe5b5.png" width="400">

| 参照名 | 使用箇所 | 取得方法 | ステータス |
| :--- | :--- | :--- | :--- |
| apiKey | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| authDomain | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| projectId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| storageBucket | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| messagingSenderId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| appId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| PSI apiKey | front / github acstions / secrets | 4の手順を参考に再発行 | 取得済 |
| Vercel development url | front / github acstions / secrets | versel / Settings / Domains |  |
| Vercel production url | front / github acstions / secrets | versel / Settings / Domains | 取得済 |

### 2. Firebaseに移動

<img src="https://user-images.githubusercontent.com/1023421/193402189-c9edde47-efa6-49c1-a213-c9fecd4703f5.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193402223-e09b1a2a-d8f3-4b77-a66b-31f01a885a5c.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193402257-459dee50-c46e-49b4-98f9-8d3fc34dbc38.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193402281-ac684341-56cc-44db-8c8e-9ea3d28f0607.png" width="400">

Vercelから発行された先程のドメインをセットする。

<img src="https://user-images.githubusercontent.com/1023421/193402326-59a6f234-9920-4c6b-a6ba-4019cb1b4b79.png" width="400">

Vercelから発行されたURLにアクセスしてログインの動作確認をしていく。

<img src="https://user-images.githubusercontent.com/1023421/193402417-ca6b5d5d-38a8-4602-a348-d7dc2ec3ba13.png" width="400">

成功していれば、Googleのアカウント選択画面が表示される。

<img src="https://user-images.githubusercontent.com/1023421/193402429-658da070-1bb2-4a02-94be-682202b0ce4c.png" width="400">

ログアウトも確認する。

<img src="https://user-images.githubusercontent.com/1023421/193402437-c062bd64-1dd1-4cc0-bec8-7eca57dfddde.png" width="400">

## 7. developmentブランチのデプロイの環境を用意する
1-2で、既にdevelopmentブランチが作成されている前提です。まだの場合は先に作成して下さい。

### 1. Vercelにdevelopment用のドメインを追加

<img src="https://user-images.githubusercontent.com/1023421/193403329-ed6579da-7001-4de6-a527-af58a9c1f2a4.png" width="400">

<a id="kickstart-front-7-2" />

### 2. サブドメインは自由に作成できるので、被らなそうな名前かつ解りやすい名前を入力して追加。

<img src="https://user-images.githubusercontent.com/1023421/193403376-ed87b488-f203-4190-8a6d-00fc32933aab.png" width="400">

### 3. 追加されたので編集をする

<img src="https://user-images.githubusercontent.com/1023421/193403412-4b29d3ea-8ea4-4c25-9a65-d565aa9dda7a.png" width="400">

### 4. `development`ブランチを入力してセーブ

<img src="https://user-images.githubusercontent.com/1023421/193403436-70ea5160-3751-42de-866c-f338b63fffc0.png" width="400">

### 5. 完了
firebase側でこのドメインも許可するので控えておく。

<a id="kickstart-front-7-5" />

<img src="https://user-images.githubusercontent.com/1023421/193403487-ea6769f0-4c30-4778-9f64-a636c9f759ea.png" width="400">

| 参照名 | 使用箇所 | 取得方法 | ステータス |
| :--- | :--- | :--- | :--- |
| apiKey | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| authDomain | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| projectId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| storageBucket | front /.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| messagingSenderId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| appId | front / .env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ | 取得済 |
| PSI apiKey | front / github acstions / secrets | 4の手順を参考に再発行 | 取得済 |
| Vercel development url | front / github acstions / secrets | versel / Settings / Domains | 取得済 |
| Vercel production url | front / github acstions / secrets | versel / Settings / Domains | 取得済 |

### 6. firebase側でdevelopment用のURLを許可する

6を参考にして、7-5で作成したdevelopment用のドメインをfirebaseに追加して下さい。firebase側で以下の様になっていればOKです。

<img src="https://user-images.githubusercontent.com/1023421/193403603-6d6a58cb-6f28-4aa1-9993-d8e4a95dc3da.png" width="400">

### 7. github actionsの設定をする

<img src="https://user-images.githubusercontent.com/1023421/193410129-64e79121-90d8-4d48-a433-68343a48e107.png" width="400">

7-4までで、取得済みの内容を以下のようにセットします。

| 変数名 | 7-4の参照名 |
| :--- | :--- |
| DEVELOPMENT_URL | Vercel development url |
| PRODUCTION_URL | Vercel production url |
| PSI_APIKEY | PSI apoiKey |

<img src="https://user-images.githubusercontent.com/1023421/193410352-29342f94-7bd6-4877-9958-d1511609fa60.png" width="400">


## 8. ローカル開発環境の構築をする

### 1. .env.localファイルを用意する
```
$ cd kickstart-front
$ touch .env.local
```
.evn.localの中身に、以下の様に記入します。

```
NEXT_PUBLIC_FIREBASE_API_KEY=＜7-4の、apiKey＞
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=＜7-4の、authDomain＞
NEXT_PUBLIC_FIREBASE_PROJECT_ID=＜7-4の、projectId＞
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=＜7-4の、storageBucket＞
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=＜7-4の、messagingSenderId＞
NEXT_PUBLIC_FIREBASE_APP_ID=＜7-4の、appId＞
                                                                                
NEXT_PUBLIC_API_ENDPOINT_URL=http://localhost:4010
```

### 2. node_modulesをインストール
```
$ yarn
```

### 3. 起動
```
$ npm run dev
```
これで、firebaseを使用したログインまで動作確認ができます。

## 9. mockサーバーのセットアップと起動

### 1. mockサーバーの準備
[kickstart-api](https://github.com/yokohama/kickstart-api/blob/main/README.md)を参考に、mockサーバーの準備をして下さい。

### 2. mockサーバーの起動
```
$ cd ./kickstart-api
$ prism mock ./openapi/root.yaml
```

### 3. nextの起動
```
$ cd ./kickstart-front
$ npm run dev
```

### 4. ブラウザから確認

<img src="https://user-images.githubusercontent.com/1023421/193437479-2c6d7088-2466-47ad-b480-2247eaaa7a0a.png" width="400">

ブラウザから、`http://localhost:3000`にアクセスしてログイン後、`SETTINGS`から`APIコール`をクリック。開発ツールのネットワークでjsonデータが返ってきてれば、mockサーバーとの通信は成功しています。

<a id="kickstart-front-10" />

## 10. API GatewayのURLをセットする
- この先、ローカルで開発したソースをVercel上のdevelopmentやproductionの環境にデプロイをしていきますが、その際にはVercel側で各環境毎に対応したAPI GatewayのURLをセットしておく必要があります。

### 1. API GatewayのURLを環境分取得する。
- [こちら](https://github.com/yokohama/kickstart-api)より、先にインフラ構築とAPI Gatewayの構築をおこなって下さい。
- 完了しましたら指示に従い、こちらに戻りデプロイを進めて下さい。
- 以降、以下の情報が揃っている前提で進めます。
- 
| 参照名 | 使用箇所 | 取得方法 | ステータス |
| :--- | :--- | :--- | :--- |
| local APIGateway endpoint URL | front | awsコンソール > API Gateway > stage / prod | 取得済 |
| local APIGateway endpoint URL | front | awsコンソール > API Gateway > stage / prod | 取得済 |
| local APIGateway endpoint URL | front | awsコンソール > API Gateway > stage / prod | 取得済 |

### 2. Vercelで変数を入力

<img src="https://user-images.githubusercontent.com/1023421/193511009-199a7b64-c589-4c77-acbe-a30c851dd7a6.png" width="400" />

- `Environment Variables`画面から以下の情報を追加します。
| 変数名 | 参照名 |
| :--- | :--- | :--- | :--- |
| NEXT_PUBLIC_API_ENDPOINT_URL | dev APIGateway endpoint URL |
| NEXT_PUBLIC_API_ENDPOINT_URL | prod APIGateway endpoint URL |

- 変数名は同じですが、`ENVIRONMENT`のチェックによって、値を変えています。
- `ENVIRONMENT`は、`Production`と`Preview`の２つ作成します。

<img src="https://user-images.githubusercontent.com/1023421/193512157-0864e112-8200-4bc0-a704-db3a503631f2.png" width="400" />

- 最終的に以下の様になっていればOKです。


<img src="https://user-images.githubusercontent.com/1023421/193512471-ca02e096-39b7-47e3-9ee7-ecaf834779c5.png" width="400" />

<a id="kickstart-front-11" />

## 11. デプロイ

### 1. lib/componenst/Index.tsxを書き換える

```
$ git diff components/Index.tsx

diff --git a/components/Index.tsx b/components/Index.tsx
index ad79efd..57c465e 100644
--- a/components/Index.tsx
+++ b/components/Index.tsx
@@ -10,7 +10,7 @@ export const Index = () => {
       <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-8'>
         <div className='flex flex-col'>
           <h1 className='font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800'>
-            Next Support Production
+            Hello! Kickstart^M
           </h1>
           <h2 className='font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8'>
             毎度、同じもの作るの面面倒なので、基本的に必要なるものをいれておきます。
@@ -29,4 +29,4 @@ export const Index = () => {
       </div>
     </div>
   )
-}
```

### 2. ローカルで確認
- 以下のコマンドを実行して、ブラウザから`http://localhost:3000`にアクセス
```
$ npm run dev
```

<img src="https://user-images.githubusercontent.com/1023421/193823033-bff4b419-9a54-453c-936d-53c65db4399b.png" width="400" />

### 3. developmentにデプロイ
```
$ git add lib/components/Index.tsx
$ git commit -m 'デプロイのテスト'
$ git push origin development
```

### 4. vercel上でデプロイ進行の確認
- デプロイ中になっている
<img src="https://user-images.githubusercontent.com/1023421/193823745-af3047d7-2671-49a2-af5d-550070e06058.png" width="400" />

### 5. devlopmentの公開URLでの確認
- [7-5](#kickstart-front-7-5)で、取得したdevelopment用のURLにアクセスして確認。

### 6. productionにデプロイ
- kickstart-frontのGitHubをブラウザで開く
- [こちら](https://github.com/yokohama/kickstart-cdk#kickstart-ckd-10-8)を参考に、ブラウザ上でmainブランチにマージする。

### 7. vercel上でデプロイ進行の確認
- デプロイ中になっている
<img src="https://user-images.githubusercontent.com/1023421/193825370-da030183-b246-4cc3-8f4b-c37dc5fd1bf4.png" width="400" />

### 8. productionの公開URLでの確認
- [7-5](#kickstart-front-7-5)で、取得したproduction用のURLにアクセスして確認。

## 12. API再構築の際の注意
- ここまでの作業終えた後に、APIの再構築が発生した際は、[kickstart-front-10](#kickstart-front-10)と、[kickstart-front-11](#kickstart-front-11)の作業もやり直す必要が有ります。

