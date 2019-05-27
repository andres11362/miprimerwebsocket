var connection = new WebSocket('ws://localhost:9030');

connection.addEventListener('open', () => {
    let message = 'Te envio un mensaje desde el cliente';
    ws.send(JSON.stringify(message));
});

