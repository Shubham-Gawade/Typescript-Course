var studentNames = ["Shubham", "Pranav", "Sanket"];
for (var i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}
console.log("----------------------------");
var studentScores = {};
studentScores["Shubham"] = 100;
studentScores["Pranav"] = 90;
studentScores["Sanket"] = 80;
for (var item in studentScores) {
    console.log(item + " " + studentScores[item]);
}
