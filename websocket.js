const websocket = require('./websockets/websocket')
const users = require('./websockets/users')
const { uuidv4 } = require('./modules/utils')

function upgrade(request, socket, head) {
    const pathname = request.url;
    const uuid = uuidv4()

    if (pathname === '/websocket') {
        websocket.handleUpgrade(request, socket, head, function done(ws) {
            websocket.emit('connection', ws, request, uuid);
        });
    } else if (pathname === '/users') {
        users.handleUpgrade(request, socket, head, function done(ws) {
            users.emit('connection', ws, request, uuid);
        });
    } else {
        socket.destroy();
    }
}

module.exports = upgrade;