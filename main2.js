let btn = document.querySelector('.btn');
let name = document.querySelector('#name');
let name1 = document.querySelector('#name1');
let email = document.querySelector('#email');
let form = document.querySelector('#my-form');
btn.addEventListener('click', onsubmit);
form.addEventListener('mouseover' , onfun);
form.addEventListener('mouseout', onfin);
function onsubmit(e){
    e.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
   
   let x = name.value;
   let y = email.value;
   let z = name1.value;
   let myobj = {
    name : x,
    age : z,
    email : y,
   }
//    to pass the data we have to stringify it
let obj_stringified = JSON.stringify(myobj);
   localStorage.setItem(x,obj_stringified );
   console.log('form submitted');
   console.log(document.localStorage);
   name.value = "";
   name1.value = "";
   email.value= "";

}
function onfun(e){
    e.preventDefault();
    form.classList.add('bg-dark');
    // setTimeout()
}
function onfin(e){
    form.classList.remove('bg-dark');
}
// form.addEventListener("click", submitData);
// local storage can only store string data forms
// what if we have an object as a data
// then we have to convert t into a string form using JSON.stringify()
