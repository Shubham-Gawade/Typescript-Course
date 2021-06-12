class BMW{
    make:string;
    model:string;
    year:string;

    constructor(make:string,model:string,year:string){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    commonEngineFunc(){
        console.log("Common Function");
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

class ThreeSeries extends BMW{
    cruiseControlledEnabled:boolean;

    cruiseControl(){
        this.cruiseControlledEnabled=true;
        console.log("Cruising");
    }

    constructor(make:string,model:string,year:string,cruiseControlledEnabled:boolean){
        super(make,model,year);
        this.cruiseControlledEnabled=cruiseControlledEnabled;
    }

    //method overrided
    start(){
        console.log("Button start");
    }

    stop(){
        console.log("Button stop");
    }
}

class FiveSeries extends BMW{
   parkingAssistEnabled :boolean;

   parkingAssist(){
       this.parkingAssistEnabled=true;
       console.log("Parked");
   }

    constructor(make:string,model:string,year:string,parkingAssistEnabled:boolean){
        super(make,model,year);
        this.parkingAssistEnabled=parkingAssistEnabled;
    }

    //method overrided
    start(){
        console.log("Remote start");
    }

    stop(){
        console.log("Remote stop");
    }
}

var threeSeries = new ThreeSeries("BMW","3511i","2018",false);
console.log(threeSeries.make +" "+ threeSeries.model+" "+threeSeries.year+" "+threeSeries.cruiseControlledEnabled);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();

var fiveSeries = new FiveSeries("BMW","511i","2018",false);
console.log(fiveSeries.make +" "+ fiveSeries.model+" "+fiveSeries.year+" "+fiveSeries.parkingAssistEnabled);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();