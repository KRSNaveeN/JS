let x = document.querySelector('#item1');
let y = document.querySelector('#item2');
let z = document.querySelector('#item3');
let a = document.querySelector('#navi');
let m = document.querySelector('#krs');
let ol = document.querySelector('#krs');
a.addEventListener('click' , register);
ol.addEventListener('click', (event)=>{
    console.log('working');
    if(event.target.tagName === 'BUTTON')
    {
        console.log('here');
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const div  = li.firstElementChild;
        const text = div.textContent;
        const ans = text.split("-");
        if(button.textContent === 'delete')
        {
            ol.removeChild(li);
            
        }
        else if(button.textContent === 'edit')
        {
              x.value = ans[0];
              y.value = ans[1];
              z.value = ans[2];


              ul.removeChild(li);
              
        }
    }
});


function register(){
    let myobj = 
    {
        name : x.value,
        email : y.value,
        number : z.value,
    
    }
let stringifiedobj = JSON.stringify(myobj);
console.log('inside registr');
 axios.post("https://crudcrud.com/api/890e96d39d0f4b0388a53dc3c9a666ea/data", myobj).then((data)=>{console.log(data),console.log("inside axios")}).catch((err)=>{console.log(err)});
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

    




