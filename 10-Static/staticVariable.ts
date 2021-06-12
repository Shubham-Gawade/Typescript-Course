class Check{
    static bankName:string="Bank of India";
    customerName:string;
    accNo:number;
    routingNo:number;

    display(){
        Check.bankName="BOI";
        console.log(Check.bankName);
    }
}

var check1= new Check();
console.log(Check.bankName);
check1.display();

var check2= new Check();
Check.bankName="BOA";
console.log(Check.bankName);

console.log("---------------------------");
