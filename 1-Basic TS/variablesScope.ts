//Var Prefix -> Accesible in whole funtion
for(var i=1;i<5;i++)
{
	console.log(i);
}

console.log(i);

//let Prefix -> Accesible in block only
for(let j=1;j<5;j++)
{
	console.log(j);
}

//console.log(j); error -> cannot be accessible out of for loop

//Const Prefix -> Cannot be changed

const pi=3.14;

//pi=4.14; error 

//Const Function
const product=(n1:number,n2:number):number=>{
	return n1*n2;
}

//product=(n1:number,n2:number):number{  error -> Cannot be modified
//	return n1-n2;
//}

