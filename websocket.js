const websocket = require('./websockets/websocket')
const users = require('./websockets/users')

function upgrade(request, socket, head) {
    const pathname = request.url;

    if (pathname === '/websocket') {
        websocket.handleUpgrade(request, socket, head, function done(ws) {
            websocket.emit('connection', ws, request);
        });
    } else if (pathname === '/users') {
        users.handleUpgrade(request, socket, head, function done(ws) {
            users.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
}

module.exports = upgrade;