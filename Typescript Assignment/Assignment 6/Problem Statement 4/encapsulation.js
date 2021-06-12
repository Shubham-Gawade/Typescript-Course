var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "getMarks", {
        get: function () {
            return this._marks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setMarks", {
        set: function (marks) {
            this._marks = marks;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.name = "Shubham";
student.setMarks = 100;
console.log(student.name + " " + student.getMarks);
//Compile using this
//tsc --target es5 encapsulation.ts
