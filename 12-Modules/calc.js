"use strict";
exports.__esModule = true;
exports.sub = exports.add = void 0;
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
function sub(num1, num2) {
    return num1 - num2;
}
exports.sub = sub;
//Only one default function can be present
function mul(num1, num2) {
    return num1 * num2;
}
exports["default"] = mul;
