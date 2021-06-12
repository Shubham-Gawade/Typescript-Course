var student = {
    firstname: "Shubham",
    lastname: "Gawade",
    age: 21
};
console.log(student.firstname);
console.log(student.age);
for (var item in student) {
    console.log(item + " : " + student[item]);
}
//Destructuring objects
var firstname = student.firstname, age = student.age;
console.log(firstname + " " + age);
