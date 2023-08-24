
// const http = require('http');
// const express = require('express');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Serve your static files (HTML, CSS, etc.)
// app.use(express.static(__dirname + '/public'));

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     // Listen for incoming messages
//     socket.on('chat message', (message) => {
//         // Broadcast the message to all connected clients
//         io.emit('chat message', message);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log('Server is running on  http://localhost:5000');
// });
//-----------------------------------------------------------------------------------
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve your static files (HTML, CSS, etc.)
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for incoming messages
    socket.on('chat message', (message) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', message);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
