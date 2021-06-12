"use strict";
//Only one default class can be present
exports.__esModule = true;
exports.Remainder = void 0;
var Divide = /** @class */ (function () {
    function Divide() {
    }
    Divide.prototype.div = function (num1, num2) {
        return num1 / num2;
    };
    return Divide;
}());
exports["default"] = Divide;
var Remainder = /** @class */ (function () {
    function Remainder() {
    }
    Remainder.prototype.remainder = function (num1, num2) {
        return num1 % num2;
    };
    return Remainder;
}());
exports.Remainder = Remainder;
