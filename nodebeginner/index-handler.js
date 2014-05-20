var server = require("./module-server-route-handler-asynch-listener");
var router = require("./router-handler-asynch-listener");
var requestHandlers = require("./requestHandlersAsynchListener");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);