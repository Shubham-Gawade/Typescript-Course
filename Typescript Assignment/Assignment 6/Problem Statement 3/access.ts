class Student{
    public name:string;
    readonly age:number= 21;
    public readonly rollno= 35;
}

var student=new Student();
student.name="Shubham";
//student.age=21;
//student.rollno=35;
console.log(student.name);
console.log(student.age);
console.log(student.rollno);
