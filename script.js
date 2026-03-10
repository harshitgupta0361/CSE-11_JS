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
const sym3 =Symbol(4);
console.log(sym3);
if(sym1==sym3)
{
    console.log("true");
}
else{
    console.log("false");
}


document.write("<br/>");


//Largest of 3 nummbers
let x=2; let y=3; let z=1;
let largrest=((x>y)?((x>z)?(x):(z)):((y>z)?(y):(z)));
document.write(largrest + "<br/>"+ "<br/>");

//For Loop
var count;
document.write("Starting Loop"+"<br/>");
for(count=0;count<10;count++)
{
    document.write("Current Count :"+count);
    document.write("<br/>");
}
document.write("Loop stopped!"+"<br/>"+"<br/>");


//While Loop

let c=0;
document.write("Starting Loop"+"<br/>");
while(c<10)
{
    document.write("Current count :"+ c + "<br />");
    c++;
}
document.write("Loop Stopped"+ "<br />"+ "<br />");



let grade='A';
document.write("Entering switch block<br />");
switch(grade)
{
    case 'A': document.write("Good Job<br />");
    break;

    case 'B': document.write("Pretty Job<br />");
    break;

    case 'C': document.write("Passed<br />");
    break;

    case 'D': document.write("Not so good<br />");
    break;

    case 'F': document.write("Failed<br />");
    break;
}
//Function Without parameters
function myFunction()
{
    alert("Hello World!");
}

function sayHello(name,age)
{
    document.write(name+" is "+age+" years old");
}

document.write("<br />");
//Arthematic operators

let a=100;
let b=67;
let d=50;

document.write("a + b + d = ");
result = a + b + d;
document.write(result);
document.write("<br />");

document.write("a + b - d = ");
result = a + b - d;
document.write(result);
document.write("<br />");

document.write("a*b*d = ");
result = a * b * d;
document.write(result);
document.write("<br />");

document.write("(a + b) / d = ");
result = (a + b)/d;
document.write(result);
document.write("<br />");


//Arrow function (anonmyous)

let add=(a,b)=>console.log(a+b);
add(10,23);

//Objects (key values in JS)
//let x=new object() (here object is a constructor & class)
//objects can contain other objects as well as function.



//Arrays in JS
var myInfo = new Array();
var myInfo1 = Array();
console.log(myInfo,myInfo1);

let collection = [
    {},
    [],
    true,
    "John",
    function () {},
    90009898193,
    undefined,
    null,
    new String("abc"),
    new Date(),
];
console.log(collection);
collection.teacherName="John Mac";
collection.phoneNO = 950008193;
console.log(collection);

let tarinerInfo=['Jay',23,"india",{ismarried:true}];
console.log(tarinerInfo);
tarinerInfo.conctact=9793810255;
console.log(tarinerInfo);
tarinerInfo[0]='Sunil';
console.log(tarinerInfo);
console.log(tarinerInfo.length);