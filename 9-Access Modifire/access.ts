class Student{
    public name:string;
    readonly age:number= 21;
    public readonly rollno= 35;
    private _marks:number;

    get getMarks():number{
        return this._marks;
    }

    set setMarks(marks:number){
        this._marks=marks;
    }
}

var student=new Student();
student.name="Shubham";
//student.age=21;
//student.rollno=35;

student.setMarks=100;

console.log(student.name+" "+student.age+" "+student.rollno+" "+student.getMarks);

//Compile using this
//tsc --target es5 access.ts