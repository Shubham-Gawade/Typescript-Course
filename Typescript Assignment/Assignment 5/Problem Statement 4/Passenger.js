var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Passenger = /** @class */ (function () {
    function Passenger(name, address) {
        this.name = name;
        this.address = address;
    }
    return Passenger;
}());
var BusinessClass = /** @class */ (function (_super) {
    __extends(BusinessClass, _super);
    function BusinessClass(name, address, bPrice) {
        var _this = _super.call(this, name, address) || this;
        _this.bPrice = bPrice;
        return _this;
    }
    BusinessClass.prototype.display = function () {
        console.log("Name : " + this.name + ", Address : " + this.address + ", BusinessClass Prize : " + this.bPrice);
    };
    ;
    return BusinessClass;
}(Passenger));
var EconomyClass = /** @class */ (function (_super) {
    __extends(EconomyClass, _super);
    function EconomyClass(name, address, ePrice) {
        var _this = _super.call(this, name, address) || this;
        _this.ePrice = ePrice;
        return _this;
    }
    EconomyClass.prototype.display = function () {
        console.log("Name : " + this.name + ", Address : " + this.address + ", EconomyClass Prize : " + this.ePrice);
    };
    ;
    return EconomyClass;
}(Passenger));
var businesssClass = new BusinessClass("Shubham", "Pune", 5000);
businesssClass.display();
var economyClass = new EconomyClass("Pranav", "Pune", 3000);
economyClass.display();
