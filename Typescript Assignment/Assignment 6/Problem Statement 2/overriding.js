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
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.drive = function () {
        console.log("Drive");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(name, model, year) {
        return _super.call(this, name, model, year) || this;
    }
    ThreeSeries.prototype.display = function () {
        console.log(this.make + " " + this.model + " " + this.year);
    };
    ThreeSeries.prototype.drive = function () {
        console.log("Auto Drive");
    };
    return ThreeSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "3511i", "2018");
threeSeries.display();
threeSeries.drive();
