# kickstart-front

1. firebaseのプロジェクトを作成する
2. プロジェクトにアプリを作成する

## 1. firebaseのプロジェクトを作成する
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

## 2. プロジェクトにアプリを作成する

<img src="https://user-images.githubusercontent.com/1023421/193398376-1dde0caf-814b-41da-aa3f-def88bcaf0c1.png" width="400">


<img src="https://user-images.githubusercontent.com/1023421/193398283-d5f81dbb-5fe4-44f3-82b6-c77af7aeb109.png" width="400">

1. 名前の設定（なんでもいい）

<img src="https://user-images.githubusercontent.com/1023421/193398499-fa7e2f6e-a764-43fc-b6e6-650866cf807f.png" width="400">


2. npmを選択して進む
赤枠の情報は後ほど使用しますので、控えておいて下さい。

<img src="https://user-images.githubusercontent.com/1023421/193399089-fc580a0c-4dab-41fd-acf6-2ffbbcbf8044.png" width="400">

## 3. Firebaseで作られた、サービス構築に必要な情報を整理する
それぞれの環境で必要になる、以下のFirebaseの情報を収集します。2-2で取得した情報を忘れた場合は、以下の取得方法を参考にして値を控えて下さい。
| 参照名 | 使用箇所 | 取得方法 |
| :--- | :--- | :--- |
| apiKey | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |
| authDomain | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |
| projectId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |
| storageBucket | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |
| messagingSenderId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |
| appId | frontの.env.local | firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ |


## Google PSIのAPIキーを取得する


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
