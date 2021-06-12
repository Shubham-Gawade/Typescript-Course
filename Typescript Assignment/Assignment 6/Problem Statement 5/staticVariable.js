var Check = /** @class */ (function () {
    function Check(customerName, accNo, routingNo) {
        this.customerName = customerName;
        this.accNo = accNo;
        this.routingNo = routingNo;
    }
    Check.prototype.display = function () {
        console.log(Check.bankName + " " + this.customerName + " " + this.accNo + " " + this.routingNo);
    };
    Check.bankName = "Bank of India";
    return Check;
}());
var check1 = new Check("Shubham", 12345, 11);
check1.display();
var check2 = new Check("Pranav", 56789, 12);
check2.display();
