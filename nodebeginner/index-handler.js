var server = require("./module-server-route-handler-asynch-listener-show");
var router = require("./router-handler-asynch-listener-show");
var requestHandlers = require("./requestHandlersAsynchListenerShow");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);