class PassengerInfo{
    firstname:string;
    lastname:string;
    freqFlyerNo:number;

    constructor(firstname:string,lastName:string,freqFlyeNo:number){
        this.firstname=firstname;
        this.lastname=lastName;
        this.freqFlyerNo=freqFlyeNo;
    }

    display(){
        console.log(this.firstname+ " "+ this.lastname+" " +this.freqFlyerNo);
    }
}

var passenger1 = new PassengerInfo("Shubham","Gawade",123);
//console.log(passenger1.firstname+ " "+ passenger1.lastname+" " +passenger1.freqFlyerNo);
passenger1.display();

var passenger2 = new PassengerInfo("Pranav","Goel",456);
//console.log(passenger2.firstname+ " "+ passenger2.lastname+" " +passenger2.freqFlyerNo);
passenger2.display();

console.log("----------------------------");

for(let item in passenger1){
    if(item !== "display"){
        console.log(item+" "+passenger1[item]);
    }
}

console.log("----------------------------");

for(let item in passenger1){
    if(passenger1[item] instanceof Function){
        continue;
    }else{    
        console.log(item+" "+passenger1[item]);
    }
}

console.log("----------------------------");