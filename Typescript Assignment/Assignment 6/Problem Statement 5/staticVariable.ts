class Check{
    static bankName:string="Bank of India";
    customerName:string;
    accNo:number;
    routingNo:number;

    constructor(customerName:string,accNo:number,routingNo:number){
        this.customerName=customerName;
        this.accNo=accNo;
        this.routingNo=routingNo;
    }

    display(){
        console.log(Check.bankName+" "+this.customerName+" "+this.accNo+" "+this.routingNo);
    }
}

var check1= new Check("Shubham",12345,11);
check1.display();

var check2= new Check("Pranav",56789,12);
check2.display();
