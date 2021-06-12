class Student{
    public name:string;
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

student.setMarks=100;

console.log(student.name+" "+student.getMarks);

//Compile using this
//tsc --target es5 encapsulation.ts