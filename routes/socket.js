module.exports = function (socket) {

    function broadcast(type, payload) {
        socket.broadcast.emit(type, payload);
        socket.emit(type, payload);
    }

    socket.on('message', function (message) {
        console.log(message);
        broadcast('message', message);
    });

};