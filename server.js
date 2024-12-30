const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080})
const clients = new Set();

server.on('connection', (socket) => {
    clients.add(socket)
    for (const client of clients) {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
            client.send(message)
        }
    }
    console.log('Cliente conectado');
    socket.on('message', (message) => {
        console.log(`Recebido: ${message}`);
        socket.send('Olá, Cliente!');
    });

    socket.on('close', () => {
        clients.delete(socket)
    });
});



console.log('Servidor Websocket rodando em ws://localhost:8080');