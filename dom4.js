 document.title = "hello";
console.dir(document);
console.log(document.body);
console.log(document.head);
console.log(document.HTML);
console.log(document.all);
console.log(document.doctype);
document.getElementById("header-title").textContent = "items listeners"
let x = document.getElementById("header-title");
x.style.backgroundColor = "blue";
document.getElementById("main-header").style.borderBottom="solid 3px black";
document.getElementById("krs").style.fontWeight = "bolder";
document.getElementById("krs").style.color = "green";


let y = document.getElementsByClassName('list-group-item');
y[2].style.color = " green";

for(let i =0; i<y.length; i++)
{
    y[i].style.backgroundColor = "#f4f4f4";
}
// document.getElementById('lastitem').style.color = "blue";
let z = document.getElementsByClassName('jk');
z[0].style.color = "red";
let t = document.getElementsByTagName('li');
t[4].style.backgroundColor = "green";
t[1].style.backgroundColor="green";
t[2].style.display = "none";
let a = document.querySelectorAll('.list-group-item');
a[1].style.color='red';
for(let  i = 0; i< a.length; i++)
{
    if(i%2 == 0){
        a[i].style.backgroundColor="grey";
    }
}

