var courses:any = ["Angular","React","Node"];
courses.push("HTML");
courses.push(20);

for(var i=0;i<courses.length;i++)
{
    console.log(courses[i]);
}

//Destructuring array

var[a,b,c]=courses;
console.log(a);
console.log(b);
console.log(c);