interface Product{
    id:number;
    name:string;
    description?:string;
    price:number;
    display():void;
}

var product1:Product={
    id:123,
    name:"IPhone",
    price:100000,
    display():void{
        console.log(this.id+" "+this.name+" "+this.price);
    }
}

console.log(product1.display());