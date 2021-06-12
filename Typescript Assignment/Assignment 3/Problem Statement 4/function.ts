function add(num1:number,num2:number):number{
    return num1+num2;
}

function employee(id:number,name:string,designation:string="tester",role?:string){
    console.log("Id",id);
    console.log("Name",name);
    if(role!=undefined){
        console.log("Role",role);
    }
    console.log("Designation",designation);
}

employee(1,"Shubham");
employee(1,"Shubham","Manager","Admin");

function calculator(fun:any):any{
    console.log("Addition is : "+fun(10,20));
}

calculator(add);