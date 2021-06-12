var Student = /** @class */ (function () {
    function Student() {
        this.age = 21;
        this.rollno = 35;
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
//stud.age=21;
//stud.rollno=35;
student.setMarks = 100;
console.log(student.name + " " + student.age + " " + student.rollno + " " + student.getMarks);
