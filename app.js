let x = document.querySelector('#item1');
let y = document.querySelector('#item2');
let z = document.querySelector('#item3');
let a = document.querySelector('#navi');
let m = document.querySelector('#krs');
let ol = document.querySelector('#krs');
a.addEventListener('click' , register);
ol.addEventListener('click', deletef);

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
let d = document.createElement('button');
let e = document.createTextNode("delete");
d.appendChild(e);
d.classList="nasik";
b.appendChild(c);
b.appendChild(d);
console.log(b);
m.appendChild(b);
console.log(m);
x.value="";
y.value = "";
z.value = "";
}
function deletef(e){
    
    if(e.target.classList.contains('nasik'))
{
    // console.log(1);
    if(confirm('are you sure?'))
    {
        // here we are dealing with button so it s parent would be li
       var lii = e.target.parentElement; 
       ol.removeChild(lii);
    }
}
}




