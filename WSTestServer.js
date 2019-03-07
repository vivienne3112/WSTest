var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({
	host : 'localhost',
	port : 8000
});

var connects = [];

wss.on('connection', function(ws) {
	connects.push(ws);
	ws.on('close', function () {
		console.log('stopping client send "close"');
		connects = connects.filter(function (conn, i) {
			return (conn === ws) ? false : true;
		});
	});

	ws.on('message', function(message) {
		var data = JSON.parse(message);
		console.log('received: %s', message);
		if(data.eventName == "MessageSend") {
			broadcast(message);
		}
	});
});

function broadcast (message) {
	connects.forEach(function (socket, i) {
		socket.send(message);
	});
}
