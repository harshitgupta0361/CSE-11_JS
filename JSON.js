let text1='{"employees":['+
'{"firstName":"John","lastName":"Doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Jones"}]}';

obj =JSON.parse(text2);
document.getElementById("demo").innerHTML

//ASYNCHRONOUS
// 1. promise
// 2. asyn/await

let promise=new Promise((resolve, reject) => {
    let sucess=false;
    if(sucess)
        resolve("data loaded");
    else
        reject("error occured");
});

promise.then(resolve => console.log(result))
.catch(reject => console.log(result));

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
getData();

//Store data
localStorage.setItem("name","harshit");

//retrive data
var name=localStorage.getItem("name");

//remove data
localStorage.removeItem("name");

//store objects
var user ={name:"harshit",age:20};
localStorage.setItem("user",JSON.stringify(user));

//retrieve object
var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);