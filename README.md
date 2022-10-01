# kickstart-front

## firebaseプロジェクトの作成
- https://console.firebase.google.com/u/0/

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
