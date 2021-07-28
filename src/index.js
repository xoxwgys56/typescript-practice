"use strict";
exports.__esModule = true;
exports.hello = void 0;
var world = 'Hi';
function hello(word) {
    if (word === void 0) { word = world; }
    return "Hello " + world + "! ";
}
exports.hello = hello;
