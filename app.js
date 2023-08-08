let x = document.querySelector('#item1');
let y = document.querySelector('#item2');
let z = document.querySelector('#item3');
let a = document.querySelector('#navi');
// let m = document.querySelector('#krs');
let ol = document.querySelector('#krs');
a.addEventListener('click' , register);
ol.addEventListener('click', (event)=>{
    console.log('working');
    if(event.target.tagName === 'BUTTON')
    {
        console.log('here',event);
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const div  = li.firstElementChild;
        const text = div.textContent;
        const ans = text.split("-");
        if(button.textContent === 'delete')
        {
            ol.removeChild(li);
            // axios.delete("")
            
            
        }
         if(button.textContent === 'edit')
        {
              x.value = ans[0];
              y.value = ans[1];
              z.value = ans[2];


              ul.removeChild(li);
              
        }
    }
});
window.addEventListener('DOMContentLoaded', ()=>{
    axios.get("https://crudcrud.com/api/11dead135d3549418caa72f228ce7483/users")
       .then((res)=>{console.log(res.data), recall(res.data)})
       .catch((err)=>console.log(err));

})

function recall(arr){
    arr.map((obj)=>{
let b = document.createElement('li');
let div = document.createElement('div');
// let c = x.value+"-"+y.value+"-"+z.value;
let c = obj.name+"-"+obj.email+"-"+obj.phone;
div.appendChild(document.createTextNode(c));

b.appendChild(div);
ol.appendChild(b);

let d = document.createElement('button');
let e = document.createTextNode("delete");
d.appendChild(e);
let m = obj._id;
d.addEventListener('click', ()=>{
    axios.delete(`https://crudcrud.com/api/11dead135d3549418caa72f228ce7483/users/${m}`);

//    ol.removeChild(b);
})
d.classList="nasik";
b.appendChild(d);


let ab = document.createElement('button');
let cd  = document.createTextNode('edit');
ab.addEventListener('click', ()=>{
    axios.delete(`https://crudcrud.com/api/11dead135d3549418caa72f228ce7483/users/${m}`);
})
ab.appendChild(cd);
ab.classList = 'editb';
b.appendChild(ab);


    })
}


function register(){
    let myobj = 
    {
        name : x.value,
        email : y.value,
        number : z.value,
    
    }
let stringifiedobj = JSON.stringify(myobj);
console.log('inside registr');
 axios.post("https://crudcrud.com/api/11dead135d3549418caa72f228ce7483/users", myobj).then((data)=>{console.log(data),console.log("inside axios")}).catch((err)=>{console.log(err)});
// localStorage.setItem(x.value,stringifiedobj);
let b = document.createElement('li');
let div = document.createElement('div');
let c = x.value+"-"+y.value+"-"+z.value;
div.appendChild(document.createTextNode(c));

b.appendChild(div);

let d = document.createElement('button');
let e = document.createTextNode("delete");
d.appendChild(e);
d.classList="nasik";
b.appendChild(d);


let ab = document.createElement('button');
let cd  = document.createTextNode('edit');
ab.appendChild(cd);
ab.classList = 'editb';
b.appendChild(ab);

ol.appendChild(b);
x.value ="";
y.value = "";
z.value ="";
}


// function deletef(e){
    
//     if(e.target.classList.contains('nasik'))
// {     
//     // console.log(1);
//     if(confirm('are you sure?'))
//     {
//         // here we are dealing with button so it s parent would be li
//        var lii = e.target.parentElement.parentElement; 
//     //    localStorage.removeItem();
//        ol.removeChild(lii);
//     }
// }
// }

    




