function hello(str) {
    return "Hello " + str;
}
console.log(hello("Shubham"));
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is : " + add(10, 20));
//Using optional parameter and default value
function employee(id, name, designation, role) {
    if (designation === void 0) { designation = "tester"; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
    console.log("Designation", designation);
}
employee(1, "Shubham");
employee(1, "Shubham", "Manager", "Admin");
//Passing a funtion to another funtion
function calculator1(fun) {
    console.log(fun(10, 20));
}
calculator1(add);
//Returning a funtion
function calculator2(fun) {
    console.log(fun(10, 20));
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
var sub = calculator2(add);
console.log(sub(20, 5));
// console.log(calculator2(add)(20,5));
//Anonymous funtion
var anonymousFunt = function (str) {
    return "Hello " + str;
};
console.log(anonymousFunt("Shubham"));
console.log("-----------------------------");
