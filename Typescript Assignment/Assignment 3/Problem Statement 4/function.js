function add(num1, num2) {
    return num1 + num2;
}
function employee(id, name, designation, role) {
    if (designation === void 0) { designation = "tester"; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
    console.log("Designation", designation);
}
employee(1, "Shubham");
employee(1, "Shubham", "Manager", "Admin");
function calculator(fun) {
    console.log("Addition is : " + fun(10, 20));
}
calculator(add);
