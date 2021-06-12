var hello = function () {
    return "Hello";
};
console.log(hello());
//Passing Parameter
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log("Multiplication is :", multiply(4, 5));
//Array of arrow funtion
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
