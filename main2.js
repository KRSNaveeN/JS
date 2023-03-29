let btn = document.querySelector('.btn');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let form = document.querySelector('#my-form');
btn.addEventListener('click', onsubmit);
form.addEventListener('mouseover' , onfun);
form.addEventListener('mouseout', onfin);
function onsubmit(e){
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
   
   let x = name.value;
   let y = email.value;
   localStorage.setItem(x,y);
   console.log('form submitted');
   name.value = "";
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

