class Calculator{
    static add(num1:number,num2:number):number{
        return num1+num2;
    }
    static sub(num1:number,num2:number):number{
        return num1-num2;
    }
}

console.log(Calculator.add(10,20));
console.log(Calculator.sub(10,20));