angular.module('myApp', [])

    .factory('socket', function ($rootScope) {
        // See: http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/
        // for further details about this wrapper
        var socket = io.connect();
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    })

    .controller('mainController', function (socket) {
        var self = this;

        self.messages = [];

        self.sendMessage = function () {
            socket.emit('message', {
                message: self.messageInput
            });
            self.messageInput = '';
        };

        socket.on('message', function (message) {

            self.messages.push({
                body: message
            });
        });
    });