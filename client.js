const WebSocket = require('ws');

function connect() {
    const socket = new WebSocket ('ws://localhost:8080');

    socket.on('open', () => {
        console.log('Conectado');
        socket.send(JSON.stringify({ type: 'chat', message: 'Olá, Servidor!'}));
    });

    socket.on('message', (data) =>{
        console.log('Mensagem do servidor:', data.toString());
    });

    socket.on('close', () => {
        console.log('Desconectado')
        setTimeout(connect, 1000);
    })

    setTimeout(() => {
        socket.send(JSON.stringify({type: 'chat', message: 'Salve pae!'}));
    }, 2000);

    socket.on('close', () => {
        clients.delete(socket)
    });
}
connect()