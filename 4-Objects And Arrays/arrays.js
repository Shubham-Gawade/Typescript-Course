var courses = ["Angular", "React", "Node"];
courses.push("HTML");
courses.push(20);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
//Destructuring array
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
