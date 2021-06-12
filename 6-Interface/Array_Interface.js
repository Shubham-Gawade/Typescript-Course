var studentNames = ["Mike", "John", "Bob"];
for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}
var studentScores = {}; //internally it is an object
studentScores["Mike"] = 100;
studentScores["John"] = 90;
studentScores["Bob"] = 80;
for (var item in studentScores) {
    console.log(item + " " + studentScores[item]);
}
