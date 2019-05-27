const PORT = process.env.PORT || 9030;

const express = require('express');
const server = require('ws');

const app = express().use(express.static('public'))
    .listen(
        PORT,
        () => console.log(`Escuchando el puerto: ${PORT}`)
    );

const wss = new server.Server({ server: app });

wss.on('connection', function (ws) {

    var message = 'te envio un mensaje desde el servidor';

    ws.send(JSON.stringify(message));

    ws.on('message', (message) => {
        let action = JSON.parse(message);
    });

    ws.on('close', ()=>console.log('El cliente se ha ido'));
});