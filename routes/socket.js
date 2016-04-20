module.exports = function (socket) {

    function broadcast(type, payload) {
        socket.broadcast.emit(type, payload);
        socket.emit(type, payload);
    }

    function userLogin(){

    }

    socket.on('message', function (message) {
        broadcast('message', message);
    });

    socket.on('newUser', function (user) {
        broadcast('newUser', user);
    })

};