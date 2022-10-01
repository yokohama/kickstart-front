# kickstart-front

## 1. firebaseプロジェクトの作成
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

## 2. アプリに必要な情報を集める




## インストール
yarn

## github / Secrets / Actions /Enviroment secrets
DEVELOPMENT_URL=TODO: vercelのpreviewのdevelopmentのURL
PRODUCTION_URL=TODO: vercelのmainのURL
PSI_APIKEY=TODO: google page speed insights (https://developers.google.com/speed/docs/insights/v5/get-started?hl=ja)

## .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=TODO: firebase > プロジェクトの概要 > 全般 > プロジェクトの設定 > プロジェクト> ウェブAPIキー
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=TODO: firebase > 構築 > Authentication > Settings > 承認済みドメイン > Default
NEXT_PUBLIC_FIREBASE_PROJECT_ID=TODO: firebase > プロジェクトの概要 > 全般 > プロジェクトの設定 > プロジェクト > プロジェクトID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=TODO: firebase > 構築 > Storage > Files > gs://以降のドメイン
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=TODO: firebase > プロジェクトの概要 > Cloud Messaging > 送信者ID
NEXT_PUBLIC_FIREBASE_APP_ID=TODO: firebase > プロジェクトの概要 > プロジェクトの設定 > マイアプリ > アプリID

TODO: firebase > プロジェクトの概要 > プロジェクトの設定 > ウェブAPIキー

## env
- *ステージング*　https://next-startup-front-dev.yuhei.yokohama/
- *本番*　https://next-startup-front.yuhei.yokohama/
