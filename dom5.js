let x = document.querySelector('#items');
console.log(x);
console.log(x.parentElement);
console.log(x.parentElement.parentElement);
// parent node and parent element both are same
console.log(x.children);
console.log(x.childNodes);
console.log(x.firstElementChild);
console.log(x.firstChild);
console.log(x.lastElementChild);
console.log(x.lastChild);
x.lastElementChild.textContent="changed text";
console.log(x.nextSibling);
// in the console it is giving null bcz it doesnot have a next sibiling
console.log(x.nextElementSibling);
console.log(x.previousSibling);
console.log(x.previousElementSibling);
x.previousElementSibling.style.color="green";

// creating elements via js
// creating  div

let y = document.createElement('div');
y.className="hello";
y.id = "hello1";
y.setAttribute('title', 'hello div');
let text = document.createTextNode('new element via js');
y.appendChild(text);
console.log(y);
// now that we have create the eleemnt , how to add it to the dom
let container = document.querySelector('#main');
let tag = document.querySelector('#krs');
container.insertBefore(y,tag);



let a = document.createElement('h2');
let text1 = document.createTextNode("HELLO WORLD");
a.appendChild(text1);
console.log(a);
let container1 = document.querySelector('header .container');
let tag1 = document.querySelector('#header-title');
container1.insertBefore(a,tag1);

let b = document.createElement('h2');
let text2 = document.createTextNode("HELLO WORLD");
b.appendChild(text2);
console.log(b);
let container3 = document.querySelector('#items');
let tag2 = document.querySelector('.list-group-item');
container3.insertBefore(b,tag2);
