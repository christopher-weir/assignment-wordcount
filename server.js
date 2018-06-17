/* eslint-disable no-console */
const { app: { port, filename, interval = 1000 } = {} } = require('./config');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// unomaly stuff
const dictionary = require('./unomaly/dictionary');
const simulator = require('./unomaly/simulator');

// load the dictionary
let words = [];
dictionary.load(filename, function(data) {
    words = data;
});

// socket.io server
io.on('connection', socket => {
    console.log('Client connected (current: %d)', io.engine.clientsCount);

    socket.on('disconnect', function() {
        console.log(
            'Client disconnected (current: %d)',
            io.engine.clientsCount
        );
    });
});

nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return nextHandler(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;

        let broadcasterInterval =
            parseInt(interval) && parseInt(interval) > 1000
                ? parseInt(interval)
                : 1000;

        // start broadcaster
        console.log(
            'Broadcasting words every %d seconds',
            broadcasterInterval / 1000
        );

        // eslint-disable-next-line no-unused-vars
        let broadcaster = setInterval(_broadcastBatch, broadcasterInterval);

        console.log(`> Ready on http://localhost:${port}`);
    });
});

function _broadcastBatch() {
    // only broadcast words if we have connected clients
    if (
        typeof io.engine.clientsCount != 'number' ||
        io.engine.clientsCount < 1
    ) {
        // skip cycle
        return;
    }
    // broadcast a batch of words to all clients
    io.emit('words', simulator.batch(words));
}
