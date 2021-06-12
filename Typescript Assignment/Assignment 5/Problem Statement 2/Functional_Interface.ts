interface Add{
    (x:number,y:number):void
}

interface Sub{
    (x:number,y:number):number
}

var add:Add = function(x:number,y:number):void{
    console.log("Addition is : ",x+y);
};

add(10,20);

var sub:Sub = function(x:number,y:number):number{
    return x-y;
};

console.log("Substraction is : ",sub(20,10));
