"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello(name) {
    if (!name)
        name = "world";
    return "hello, ".concat(name, "!");
}
exports.hello = hello;
