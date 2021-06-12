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
