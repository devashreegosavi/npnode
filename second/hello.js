"use strict";
exports.__esModule = true;
var logger_1 = require("../node_modules/logger");
var request_1 = require("../node_modules/request");
var lg = logger_1["default"].createLogger();
lg.log('hi');
request_1["default"].get('http://codekul.com', function (err, res, bdy) {
    console.log(err);
    console.log(res);
    console.log(bdy);
});
