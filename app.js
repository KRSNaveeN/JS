let x = document.querySelector('#item1');
let y = document.querySelector('#item2');
let z = document.querySelector('#item3');
let a = document.querySelector('#navi');
let m = document.querySelector('#krs');
a.addEventListener('click' , register);

function register(){
    let myobj = 
    {
        name : x.value,
        email : y.value,
        number : z.value,
    
    }
let stringifiedobj = JSON.stringify(myobj);
localStorage.setItem(x.value,stringifiedobj);
let b = document.createElement('li');
let c = document.createTextNode(x.value+"   "+y.value+" : "+z.value);

b.appendChild(c);
console.log(b);
m.appendChild(b);
console.log(m);
x.value="";
y.value = "";
z.value = "";
}




