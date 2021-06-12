//Number Index
interface StudentName{
    [index:number]:String;
    //index type and data type
    length:number;
}

var studentNames:StudentName = ["Mike","John","Bob"];

for(var i=0;i<studentNames.length;i++)
{
    console.log(studentNames[i]);
}

//String index
interface studentScore{
    [index:string]:number;
}

var studentScores:studentScore = {}; //internally it is an object

studentScores["Mike"]=100;
studentScores["John"]=90;
studentScores["Bob"]=80;

for(var item in studentScores)
{
    console.log(item+ " "+ studentScores[item]);
}