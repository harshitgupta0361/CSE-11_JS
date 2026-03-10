/*                         DOM: DOCUMENT OBJECT MODEL 
-- Window onject: top node in DOM hierarchy
-- Document object: it is a property of a object

-> JS can:
        --change all the html elements,attributes,css style in the page
        --remove existing elements and attributes
        --react to existing html elements
        --create new htmml elements*/

const result=document.getElementById("para");
result.innerHTML="<b>my self</b>";    //----- not read html tags.
//result.innerText="<b>hello</b>";    -----does not read html tags.
result.title="my name";               //attribute setting
console.log(result);


const result2=document.getElementsByClassName("p1");
result2[0].innerHTML="Hello";
result2[1].innerHTML="World";
console.log(result2);

//By tag name
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";            //can also run without using console

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