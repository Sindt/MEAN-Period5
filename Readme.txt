Name attributes of HTTP protocol makes it difficult to use for real time systems.

Bi-directional: HTTP is a uni-directional protocol where a request is always initiated by client,
server processes and returns a response, and then the client consumes it.

Full-duplex: HTTP allows the request message to go from client to server and then server sends a response message to the client.
At a given time, either client is talking to server or server is talking to client.

Single TCP Connection: Typically a new TCP connection is initiated for a HTTP request and terminated after the response is received.
A new TCP connection need to be established for another HTTP request/response.
-------------------------------------------------------------------------------------------

Explain polling and long-polling strategies, their pros and cons.
Polling:
Web applications were originally developed around a client/server model, where the Web client is always the initiator of transactions,
requesting data from the server. Thus, there was no mechanism for the server to independently send, or push, data to the client
without the client first making a request.

Pros: simpler, not server consuming (if the time between requests is long).
Cons: bad if you need to be notified WHEN the server event happens with no delay.

Long-polling:
Client application (browser) sends a request with event recipient id, and current state to the server via HTTP.
It creates a process, which repeatedly checks DB until the state is changed in there. When the state eventually changed,
the client gets the server response and sends next request to the server.

Pros: you are notified WHEN the server event happens with no delay.
Cons: more complex and more server resources used.
-----------------------------------------------------------------------------

What is HTTP streaming, SSE (Server sent events)?

When communicating using SSEs, a server can push data to your app whenever it wants, without the need to make an initial request.
In other words, updates can be streamed from server to client as they happen.
SSEs open a single unidirectional channel between server and client.

SSEs are sent over traditional HTTP. That means they do not require a special protocol or server implementation to get working.
WebSockets on the other hand, require full-duplex connections and new Web Socket servers to handle the protocol.
--------------------------------------------------------------------------------

What is WebSocket protocol, how is it different from HTTP communication, what advantages it has over HTTP?

The WebSocket specification defines an API establishing "socket" connections between a web browser and a server.
There is an persistent connection between the client and the server and both parties can start sending data at any time.

Duplex/directional:
Uni-directional: HTTP poll and long poll
Bi-direcitonal: WebSockets.

Bandwidth in decreasing efficiency:
WebSockets: connection setup handshake and a few bytes per frame
HTTP long-poll: connection for every message
HTTP poll: connection for every message + no data messages
--------------------------------------------------------------------------------

Explain what the WebSocket Protocol brings to the Web-world.
WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time.

The client establishes a WebSocket connection through a process known as the WebSocket handshake.
This process starts with the client sending a regular HTTP request to the server.
An Upgrade header is included in this request that informs the server that the client wishes to establish a WebSocket connection.

With WebSockets you can transfer as much data as you like without incurring the overhead associated with traditional HTTP requests.
Data is transferred through a WebSocket as messages, each of which consists of one or more frames containing the data you are sending (the payload).
In order to ensure the message can be properly reconstructed when it reaches the client each frame is prefixed with 4-12 bytes of data about the payload.
Using this frame-based messaging system helps to reduce the amount of non-payload data that is transferred, leading to significant reductions in latency.
--------------------------------------------------------------------------------

Explain and demonstrate the process of WebSocket communication - From connecting client to server,
through sending messages, to closing connection.

See public/app.js
--------------------------------------------------------------------------------

What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the
backend and standard APIs on frontend? Which problems do they solve?

Socket.io abstracts many transports, including AJAX long-polling and WebSockets, into a single API.
It allows developers to send and receive data without worrying about cross-browser compatibility.

Socket.io have a hierarchy of its own, so when websocket fails, it goes back to long or short polling.

Socket.IO simplifies the WebSocket API and unifies the APIs of its fallback transports. Transports include:

WebSocket
Flash Socket
AJAX long-polling
AJAX multipart streaming
IFrame
JSONP polling
--------------------------------------------------------------------------------

Explain the pros & cons of using a Backend as a Service Provider like Firebase.
Pros:
It lets you create realtime apps where the data changes frequently and those modifications are broadcast to all the connected users.
Cross Platform API.
Three way binding feature.
Stored in the cloud so readily available everywhere.
Data stored in JSON.

Cons:
Limited to 50 Connections and 100mb of Storage (Free edition)
You don't host the data, Firebase does.
Unless your app runs of one centralized database updated by a vast quantity of users, it's a major overkill.

Explain and demonstrate “three-way data binding” using Firebase and Angular
With AngularFire we can take advantage of a three way data binding as opposed to the traditional
two way data binding in AngularJS.

In AngularJS our scope model and view stay in sync = the two way data binding.
But if you use FireBase as a backend, you empower yourself with a three way binding feature.
You can basically bind your model data to a FireBase location so that whenever your models change,
those changes are automatically pushed to FireBase.
Similarly, whenever the data at the particular FireBase location changes, your local scope model is also updated.
--------------------------------------------------------------------------------
