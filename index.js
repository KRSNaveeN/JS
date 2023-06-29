const button1 = document.getElementById('form');
const ul = document.getElementById('uls')
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
button1.addEventListener('click', (e)=>{
    let a = one.value;
    let b = two.value;
    let c= three.value;
    e.preventDefault();
   let li = document.createElement('li');
   li.textContent = one.value+" "+two.value +" "+three.value;
   ul.appendChild(li);
   id = Math.random();
   localStorage.setItem("expense amount", a);
   localStorage.setItem("expense category", b);

   let add = document.createElement('BUTTON');
   add.addEventListener('click', ()=>{
        one.value=a;
        two.value = b;
        three.value = c;
    console.log("add")
   })
   add.setAttribute("class", "addbtn")
   let btn = document.createElement('BUTTON');
   btn.addEventListener('click', ()=>{
    ul.removeChild(li);
    console.log("del");
   })
  btn.setAttribute("class", "delbtn" )
   add.textContent = "Edit Expense";
   btn.textContent = "Delete Expense";
   li.appendChild(add);
   li.appendChild(btn);
   one.value = "";
   two.value = "";
   

});

