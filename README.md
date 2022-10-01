# kickstart-front

1. リポジトリをforkする
2. firebaseのプロジェクトを作成する
3. プロジェクトにアプリを作成する
4. Google PSIのAPIキーを取得する
5. Vercelにプロジェクトを作成する

## 1. リポジトリをforkする

## 2. firebaseのプロジェクトを作成する
- https://console.firebase.google.com/u/0/

1. プロジェクトを作成

<img src="https://user-images.githubusercontent.com/1023421/193396716-18544f03-922c-4d32-a137-94afa0fba348.png" width="400">

2. 名前を入力（なんでもいい）

<img src="https://user-images.githubusercontent.com/1023421/193396754-a465aa1f-aa31-4a13-be0b-25329b92a2e5.png" width="400">

3. 後からでも設定できるのでOFFにする

<img src="https://user-images.githubusercontent.com/1023421/193396914-50149456-33c0-4e9c-9d73-0465f9c92ff1.png" width="400">

4. 完成
<img src="https://user-images.githubusercontent.com/1023421/193397107-b901dad5-166e-4e48-a693-3d562c679186.png" width="400">

5. Authenticationを作成していく
<img src="https://user-images.githubusercontent.com/1023421/193397153-8a463518-28ad-4875-81a4-2af2545fcc79.png" width="400">

<img src="https://user-images.githubusercontent.com/1023421/193397179-cfd6d65e-5755-4bcf-96e4-582b00489b8c.png" width="400">

6. Googleを選択

<img src="https://user-images.githubusercontent.com/1023421/193397284-95ab91a5-f16e-4c4a-aaaf-89e96db86c84.png" width="400">

7. 有効にしてメアドを入力して保存

<img src="https://user-images.githubusercontent.com/1023421/193397353-80cf99a7-3f83-4cd2-8235-bf306aec18c6.png" width="400">

8. 完了

<img src="https://user-images.githubusercontent.com/1023421/193397433-d89eaa2d-4fc3-44dc-bc8e-b9da196b9d83.png" width="400">

## 3. プロジェクトにアプリを作成する

<img src="https://user-images.githubusercontent.com/1023421/193398376-1dde0caf-814b-41da-aa3f-def88bcaf0c1.png" width="400">


<img src="https://user-images.githubusercontent.com/1023421/193398283-d5f81dbb-5fe4-44f3-82b6-c77af7aeb109.png" width="400">

1. 名前の設定（なんでもいい）

<img src="https://user-images.githubusercontent.com/1023421/193398499-fa7e2f6e-a764-43fc-b6e6-650866cf807f.png" width="400">


2. npmを選択して進む
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


## 4. Google PSIのAPIキーを取得する

1. サイトにアクセス
https://developers.google.com/speed/docs/insights/v5/get-started

<img src="https://user-images.githubusercontent.com/1023421/193399235-e26e4a63-2856-4dbd-b2ca-7f64ac563b1c.png" width="400">

2. 2で作成したプロジェクトを選択して作成

<img src="https://user-images.githubusercontent.com/1023421/193399300-e8b3e3ff-3d92-4526-a813-291e43960a57.png" width="400">

3. APIキーを取得する
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


## 5. Vercelにプロジェクトを作成する

1. サイトにアクセス
https://vercel.com/dashboard

2. プロジェクトを作成

<img src="https://user-images.githubusercontent.com/1023421/193399755-da17175b-13e4-47c9-8efa-0b38a66471a2.png" width="400">

3. gitHubと連携

<img src="https://user-images.githubusercontent.com/1023421/193399800-e055c90a-60cf-4809-941c-c94d5f5ece03.png" width="400">

4. 連携するプロジェクト名を入力して検索
権限がないため、権限を追加する必要がある。

<img src="https://user-images.githubusercontent.com/1023421/193400014-ae5ae9a7-5214-4718-aa93-71d686f88bb4.png" width="400">

5. 今回forkしたオーガニゼーション（アカウント）を選択

<img src="https://user-images.githubusercontent.com/1023421/193400059-fa8888a3-0634-4469-84ff-e566cae654b7.png" width="400">

6. kickstart-frontのリポジトリを選択

<img src="https://user-images.githubusercontent.com/1023421/193400299-07c3a7c0-3f94-4e6f-992c-ba4af70c68b3.png" width="400">

7. Vercelにリポジトリをインポート
権限を追加したのでインポートできるようになったので、インポートします。

<img src="https://user-images.githubusercontent.com/1023421/193400346-53d90aef-ff30-42b0-813f-8500125fa877.png" width="400">

8. 環境変数をセットしていきます

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

9. デプロイします

<img src="https://user-images.githubusercontent.com/1023421/193400888-3bb9f897-2363-4ed7-a6c2-259243f36cce.png" width="400">

10. 「Congratulations!」成功です
ダッシュボードに戻ります。

<img src="https://user-images.githubusercontent.com/1023421/193401142-6e2eb8b9-334c-46e3-8df4-169cd4d888e2.png" width="400">

11. 公開されたURLで表示されることを確認します。

<img src="https://user-images.githubusercontent.com/1023421/193401238-b14f390d-3e72-45da-bf50-48196a8e5c15.png" width="400">


## インストール
yarn

## github / Secrets / Actions /Enviroment secrets
DEVELOPMENT_URL=TODO: vercelのpreviewのdevelopmentのURL
PRODUCTION_URL=TODO: vercelのmainのURL
PSI_APIKEY=TODO: google page speed insights (https://developers.google.com/speed/docs/insights/v5/get-started?hl=ja)

## .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=TODO: 
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=TODO: 
NEXT_PUBLIC_FIREBASE_PROJECT_ID=TODO: 
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=TODO: firebase > 構築 > Storage > Files > gs://以降のドメイン
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=TODO: 
NEXT_PUBLIC_FIREBASE_APP_ID=TODO: 

TODO: firebase > プロジェクトの概要 > プロジェクトの設定 > ウェブAPIキー

## env
- *ステージング*　https://next-startup-front-dev.yuhei.yokohama/
- *本番*　https://next-startup-front.yuhei.yokohama/
