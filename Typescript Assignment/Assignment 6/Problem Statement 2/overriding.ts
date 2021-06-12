class BMW{
    make:string;
    model:string;
    year:string;

    constructor(make:string,model:string,year:string){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    drive(){
        console.log("Drive");
    }    
}

class ThreeSeries extends BMW{
    constructor(name:string,model:string,year:string){
        super(name,model,year);
    }

    display(){
        console.log(this.make +" "+ this.model+" "+this.year);
    }

    drive(){
        console.log("Auto Drive");
    }
}

var threeSeries = new ThreeSeries("BMW","3511i","2018");
threeSeries.display();
threeSeries.drive();
