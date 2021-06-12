var PassengerInfo = /** @class */ (function () {
    function PassengerInfo(firstname, lastName, freqFlyeNo) {
        this.firstname = firstname;
        this.lastname = lastName;
        this.freqFlyerNo = freqFlyeNo;
    }
    PassengerInfo.prototype.display = function () {
        console.log(this.firstname + " " + this.lastname + " " + this.freqFlyerNo);
    };
    return PassengerInfo;
}());
var passenger1 = new PassengerInfo("Shubham", "Gawade", 123);
//console.log(passenger1.firstname+ " "+ passenger1.lastname+" " +passenger1.freqFlyerNo);
passenger1.display();
var passenger2 = new PassengerInfo("Pranav", "Goel", 456);
//console.log(passenger2.firstname+ " "+ passenger2.lastname+" " +passenger2.freqFlyerNo);
passenger2.display();
console.log("----------------------------");
for (var item in passenger1) {
    if (item !== "display") {
        console.log(item + " " + passenger1[item]);
    }
}
console.log("----------------------------");
for (var item in passenger1) {
    if (passenger1[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item + " " + passenger1[item]);
    }
}
console.log("----------------------------");
