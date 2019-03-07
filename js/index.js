window.addEventListener('DOMContentLoaded', function() {

	var hostname = (window.location.hostname == "") ? "localhost" : window.location.hostname;
	var urlattr = (window.location.protocol == "file:") ? ":8000" : window.location.protocol;

	document.querySelector("#connectURL").textContent = "ws://" + hostname + urlattr;
	SetWS(new poorws(document.querySelector("#connectURL").textContent));

	var uuid = generateUuid();
	document.querySelector("#uuid").textContent = uuid;

	SetDeviceInformation({
		deviceId : uuid ,
		deviceName : "TestChatTool"
	});

	var sendObj = {};
	sendObj.eventName = "MessageSend";
	sendObj.name = "";
	sendObj.uuid = "";
	sendObj.message = "";

	document.querySelector("#send").addEventListener('click', () => {
		sendObj.name = document.querySelector("#name").value;
		sendObj.uuid = document.querySelector("#uuid").textContent;
		sendObj.message = document.querySelector("#message").value;
		console.log(sendObj);
		SendEvent(sendObj);
	})

	SetEventCallBack(function(eventData) {
		console.log("Receive : " + eventData.eventName);
		if(eventData.eventName == "MessageSend") {
			var span = document.createElement("span");
			span.setAttribute('title', eventData.uuid)
			span.textContent = eventData.name + " > " + eventData.message;
			document.querySelector("#log").appendChild(span);
			document.querySelector("#log").appendChild(document.createElement("br"));
		}
	});

});
