interface Add{
    (x:number,y:number):void
}

//Return type is optional
//if it is empty or Void return type then it is overrideable

interface Sub{
    (x:number,y:number):number
}

var add:Add = function(x:number,y:number):void{
    console.log(x+y);
};

add(10,20);

var sub:Sub = function(x:number,y:number):number{
    return x-y;
};

console.log(sub(20,10));
