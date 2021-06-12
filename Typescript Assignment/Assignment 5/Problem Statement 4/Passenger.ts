class Passenger{
    name:string;
    address:string;
    
    constructor(name:string,address:string){
        this.name=name;
        this.address=address;
    }
}

class BusinessClass extends Passenger{
    bPrice:number;

    constructor(name:string,address:string,bPrice:number){
        super(name,address);
        this.bPrice=bPrice;
    }

    display(){
        console.log("Name : "+this.name+", Address : "+this.address+", BusinessClass Prize : "+this.bPrice);
    };
}

class EconomyClass extends Passenger{
    ePrice:number;

    constructor(name:string,address:string,ePrice:number){
        super(name,address);
        this.ePrice=ePrice;
    }

    display(){
        console.log("Name : "+this.name+", Address : "+this.address+", EconomyClass Prize : "+this.ePrice);
    };
}

var businesssClass = new BusinessClass("Shubham","Pune",5000);
businesssClass.display();

var economyClass = new EconomyClass("Pranav","Pune",3000);
economyClass.display();