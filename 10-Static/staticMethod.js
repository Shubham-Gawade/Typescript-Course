var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    return Calculator;
}());
console.log(Calculator.add(10, 20));
console.log(Calculator.sub(10, 20));
