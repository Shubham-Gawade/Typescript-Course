"use strict";
exports.__esModule = true;
var calc_1 = require("./calc");
console.log("Add : ", calc_1.add(2, 3));
console.log("Sub : ", calc_1.sub(30, 20));
var calc = require("./calc");
console.log("Add : ", calc.add(4, 3));
console.log("Sub : ", calc.sub(40, 20));
var calc_2 = require("./calc");
console.log("Mul : ", calc_2["default"](4, 5));
var classModule_1 = require("./classModule");
var calculator = new classModule_1["default"];
console.log("Div : ", calculator.div(30, 5));
var rem = new classModule_1.Remainder;
console.log("Remainder : ", rem.remainder(30, 7));