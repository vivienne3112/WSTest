var evnetWS = null;
var eventDeviceInformation = "";
var eventEventCallBack = null;

// WSオブジェクト
function SetWS(ws) {
	evnetWS = ws;
	evnetWS.onOpen = function() {
		console.log("send deviceInfo.");
		console.log(eventDeviceInformation);
		evnetWS.send(JSON.stringify(eventDeviceInformation));
	};

	evnetWS.onMessage = function(message) {
		if(eventEventCallBack != null)
			eventEventCallBack(JSON.parse(message.data));
	};

	evnetWS.onStatusChange = function(status) {
		switch(status) {
			case 0  : document.querySelector("#status").textContent = "サーバ接続中"; break;
			case 1  : document.querySelector("#status").textContent = "サーバ接続済"; break;
			case 2  : document.querySelector("#status").textContent = "サーバ切断中"; break;
			case 3  : document.querySelector("#status").textContent = "サーバ切断"; break;
			default : document.querySelector("#status").textContent = "エラー";
		}
	};
}

//	デバイス情報設定
function SetDeviceInformation(deviceInfo) { eventDeviceInformation = deviceInfo; }

//	コールバック設定
function SetEventCallBack(cb) { eventEventCallBack = cb; }

//	イベント送信
function SendEvent(event) { evnetWS.send(JSON.stringify(event)); }
