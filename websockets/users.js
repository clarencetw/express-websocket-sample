const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', function connection(ws, req, uuid) {
    const id = setInterval(function () {
        ws.send(JSON.stringify(process.memoryUsage()), function () {
            //
            // Ignore errors.
            //
        });
    }, 100);
    console.log(`started client interval uuid: ${uuid}`);

    ws.on('close', function () {
        console.log('stopping client interval');
        clearInterval(id);
    });
});

module.exports = wss;