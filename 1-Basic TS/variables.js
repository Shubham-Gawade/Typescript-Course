var num1 = 10;
console.log(num1);
var s1 = "Hello world";
var s2 = "welcome";
console.log(s1);
console.log(s2);
var b1 = true;
var b2 = false;
console.log(b1);
console.log(b2);
var a1 = {
    productId: 1,
    productName: "Laptop",
    price: 100000
};
console.log(a1);
var array1 = ["BMW", "TATA", "Audi"];
console.log(array1);
console.log(array1[0]);
console.log(array1.length);
var array2 = ["BMW", 123, { name: "shubham", age: 21 }, true];
console.log(array2);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender);
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var Weeks;
(function (Weeks) {
    Weeks[Weeks["Friday"] = 5] = "Friday";
    Weeks[Weeks["Saturday"] = 6] = "Saturday";
    Weeks[Weeks["Sunday"] = 7] = "Sunday";
})(Weeks || (Weeks = {}));
console.log(Weeks[5]);
console.log(Weeks[6]);
console.log(Weeks[7]);
