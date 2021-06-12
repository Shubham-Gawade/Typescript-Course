//Interface works at complie time only
//The concept of interface does not exist in javascript

interface Product{
    id:number;
    name:string;
    description:string;
    price?:number;
    display():void;
}

//Object literal name , type and number of literals cannot be changed
//We can create multiple objects using same interface
var product1:Product={
    id:123,
    name:"IPhone",
    description:"8gb_Ram",
    price:100000,
    display():void{
        console.log(this.id+" "+this.name+" "+this.description+" "+this.price);
    }
}

console.log(product1.display());

var product2:Product={
    id:124,
    name:"Samsung",
    description:"8gb_Ram",
    //price is optional
    display():void{
        console.log(this.id+" "+this.name+" "+this.description);
    }
}

console.log(product2.display());
