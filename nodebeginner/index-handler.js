var server = require("./module-server-route-handler-asynch");
var router = require("./router-handler-asynch");
var requestHandlers = require("./requestHandlersAsynch");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);