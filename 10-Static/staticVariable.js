var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOI";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank of India";
    return Check;
}());
var check1 = new Check();
console.log(Check.bankName);
check1.display();
var check2 = new Check();
Check.bankName = "BOA";
console.log(Check.bankName);
console.log("---------------------------");
