var server = require("./module-server-route");
var router = require("./router");

server.start(router.route);