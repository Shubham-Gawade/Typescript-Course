import {add as sum ,sub as minus} from './calc';

console.log("Add : ",sum(2,3));
console.log("Sub : ",minus(30,20));

import * as calc from './calc';

console.log("Add : ",calc.add(4,3));
console.log("Sub : ",calc.sub(40,20));

import mul from './calc';
console.log("Mul : ",mul(4,5));

import Divide,{Remainder} from './classModule';
var calculator=new Divide;
console.log("Div : ",calculator.div(30,5));
var rem=new Remainder;
console.log("Remainder : ",rem.remainder(30,7));