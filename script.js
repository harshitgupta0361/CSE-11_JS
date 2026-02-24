// undefined
let num;
console.log(num);
console.log(typeof(num));

//number
num=10;
console.log(num);
console.log(typeof(num));

//boolean
num =false;
console.log(num);
console.log(typeof(num));

//string
num ="Harshit Gupta";
console.log(num);
console.log(typeof(num));

//null
num =null;
console.log(num);
console.log(typeof(num));

//function define
var sayHello =function()
{
    alert("hello world!");
}
console.log(sayHello);


//SYMBOLS
const sym1 =Symbol(4);
console.log(sym1);
const sym2 =Symbol(4);
console.log(sym2);
if(sym1==sym2)
{
    console.log("true");
}
else{
    console.log("false");
}
