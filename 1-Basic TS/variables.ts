var num1:number = 10;
console.log(num1);

var s1:string = "Hello world";
var s2:string = `welcome`;

console.log(s1);
console.log(s2);

var b1:boolean = true;
var b2:boolean = false;

console.log(b1);
console.log(b2);

var a1:any = {
    productId: 1,
    productName: "Laptop",
    price: 100000
}
console.log(a1);

var array1:Array<string> = ["BMW","TATA","Audi"];
console.log(array1);
console.log(array1[0]);
console.log(array1.length);

var array2:Array<any> = ["BMW",123,{name:"shubham",age:21},true];
console.log(array2);

enum Gender{
    Male,
    Female
}
console.log(Gender);
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);

enum Weeks{
    Friday=5,
    Saturday,
    Sunday
}
console.log(Weeks[5]);
console.log(Weeks[6]);
console.log(Weeks[7]);