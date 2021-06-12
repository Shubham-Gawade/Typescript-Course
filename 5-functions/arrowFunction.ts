var hello = ():string=>{
    return "Hello";
}

console.log(hello());

//Passing Parameter
var multiply = (num1:number,num2:number):number=>{
    return num1*num2;
}

console.log("Multiplication is :",multiply(4,5));

//Array of arrow funtion
var myarray:Array<any> = [];

for(var i=0;i<10;i++)
{
	myarray.push(():number=>{return i});
}

for(var i=0;i<10;i++)
{
	console.log(myarray[i]());
}