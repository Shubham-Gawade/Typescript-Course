interface Exterior{
    color:string;
    numberOfDoors:number;
}

interface Interior{
    seats:number;
    auto:boolean;
}

interface Car extends Exterior,Interior{
    make:string;
    model:string;
    year:number;
}

var car1:Car={
    make:"Maruti",
    model:"Brezza",
    year:2017,
    color:"red",
    numberOfDoors:4,
    seats:4,
    auto:false
}

for(var item in car1){
    console.log(item + " " + car1[item]);
}