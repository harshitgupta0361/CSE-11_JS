/*                         DOM: DOCUMENT OBJECT MODEL 
-- Window onject: top node in DOM hierarchy
-- Document object: it is a property of a object

-> JS can:
        --change all the html elements,attributes,css style in the page
        --remove existing elements and attributes
        --react to existing html elements
        --create new htmml elements*/

const result=document.getElementById("para");
result.innerHTML="<b>my self</b>";                              //----- not read html tags.
//result.innerText="<b>hello</b>";                              -----does not read html tags.
result.title="my name";                                         //attribute setting
console.log(result);


const result2=document.getElementsByClassName("p1");            //by class name: return array
result2[0].innerHTML="Hello";
result2[1].innerHTML="World!";
console.log(result2);

//By tag name
const result3=document.getElementsByTagName("p");               //by tag name: return array
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";                            //can also run without using console

const test =document.querySelector("ul li:nth-child(2)");
test.style.backgroundColor="green";
test.style.padding="10px";

const test2=document.querySelectorAll("ul li");
for(x in test2)
{
    test2[x].style.backgroundColor="yellow";
    test2[x].style.margin="20px";
    test2[x].style.color="blue";
    test2[x].style.padding="10px";
}

//Attributes
const element=document.getElementById("myH1");
element.style.backgroundColor="green";
element.style.color="red";
let text=element.getAttribute("class");
document.getElementById("demo").innerHTML=text;

function myFunction()
{
    document.getElementById("myH1").setAttribute("class","democlass");
    alert("Attribute added sucessfully");
}

//Creating HTML element in JS
const heading=document.createElement("h2");
const bodytag=document.getElementsByTagName("body");
bodytag.append(heading);

//                         EVENTS IN JS

// 1. onclick
function onCLick()
{
    console.log("Clicked");
}
// 2. mouseover
function onmouseOver()
{
    console.log("Mouse Over");
}
// 3. mouseout
function onmouseOut()
{
    console.log("Mouse Out");
}
// 4. mouseup
function onmouseUp()
{
    console.log("Mouse Up");
}
// 5. mousedown
function onmouseDown()
{
    console.log("Mouse Down");
}
// 6. mousemove
function onmouseMove()
{
    console.log("Mouse Move");
}
// 7. ondblclick
function onDoubleClick()
{
    console.log("Double Click");
}

// On Load
function onLoad()
{
    alert("Window Loaded Sucessfully");
}
function unLoad()
{
    alert("Window unloaded Sucessfully");
}