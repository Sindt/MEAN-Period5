Name attributes of HTTP protocol makes it difficult to use for real time systems.


Explain polling and long-polling strategies, their pros and cons.
Polling:
Basically AJAX, using XmlHttpRequest.

Long-polling:
Client application (browser) sends a request with event recipient id, and current state to the server via HTTP.
It creates a process, which repeatedly checks DB until the state is changed in there. When the state eventually changed,
the client gets the server response and sends next request to the server.


What is HTTP streaming, SSE (Server sent events)?

When communicating using SSEs, a server can push data to your app whenever it wants, without the need to make an initial request.
In other words, updates can be streamed from server to client as they happen.
SSEs open a single unidirectional channel between server and client.

SSEs are sent over traditional HTTP. That means they do not require a special protocol or server implementation to get working.
WebSockets on the other hand, require full-duplex connections and new Web Socket servers to handle the protocol.


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


Explain what the WebSocket Protocol brings to the Web-world.


Explain and demonstrate the process of WebSocket communication - From connecting client to server,
through sending messages, to closing connection.


What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the
backend and standard APIs on frontend? Which problems do they solve?


What is Backend as a Service, Database as a Service, why would you consider using Firebase in your
projects?


Explain the pros & cons of using a Backend as a Service Provider like Firebase.
Pros:
It lets you create cool realtime apps where the data changes frequently and those modifications
are broadcast to all the connected users.
Cross Platform API
Three way binding feature
Stored in the cloud so readily available everywhere.
Data stored in JSON

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


Explain and demonstrate the difference between the simple chat system in your own WebSocket + Node.js
backend vs. Firebase.
