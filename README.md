WSテスト用プロジェクト  
---

#### 利用手順

* 動作環境
	* NodeJS v10.15.3 (最新のLTSでも動作すると思われます。)
	* Google Chrome（新しめのやつ）


* 構築手順
	1. 利用PCにNodeJSのインストール
	1. 本フォルダで「npm install」実行
		1. 本フォルダ直下に「node_modules」のフォルダができていればOKです。
	1. 「event_poorws.js」更新
		1. 接続先はlocalhost:8000になっているので、利用するPCに合わせ変更してください。
	1. コンソールで「node WSTestServer.js」と実行
	1. index.htmlをchromeで実行
		1. WebSocketの動きがわかるようになるために、以下のセットでやるのがおすすめです。
			* 通常にchromeを起動。index.htmlを実行
			* シークレットモードでchromeを起動。index.htmlを実行
	1. 名前、発言に文字を入力
	1. ログエリアに文字が出力されていることを確認


---
#### ファイルの説明
* WSTestServer.js  
	NodeJS。WSサーバの機能を有する  
	簡易的に作成したものなので、エラーが出たら再起動してください。
* index.html  
	WSTestServerに対するクライアント  
* package.json  
	NodeJSで利用するパッケージファイル  
	NodeJSライブラリをインストールする時のみ利用
* README.md  
	本ファイル
* js/poorws.js  
	WebSocketを行うライブラリ
* js/uuid-v4.js  
	UUIDを作成するライブラリ
* js/index.js  
	画面、event_poorws.jsをつなぐJavaScript
* js/event_poorws.js  
	WebSockeライブラリを扱うJavaScript

ファイルを見てさっぱりわからなかったら連絡をください。
