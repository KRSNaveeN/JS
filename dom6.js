let x = document.querySelector('#item');
let y = document.querySelector('#addForm');
let z = document.querySelector('#items');
y.addEventListener('submit', additem);
z.addEventListener('click' , remove);


function additem(e)
{
    e.preventDefault();
    let newtag = document.createElement('li');
    newtag.className='list-group-item';
    newtag.style= "display:flex";
    let a = document.createTextNode(x.value);
    newtag.appendChild(a);
    z.appendChild(newtag);
    let newbtn = document.createElement('button');
    let content = document.createTextNode("X");
    newbtn.appendChild(content);
    newbtn.className ="btn btn-danger btn-sm float-right delete"
    newtag.appendChild(newbtn);
    x.value =""; 
    
    let newbtn1 = document.createElement('button');
    let content1 = document.createTextNode("edit");
    newbtn1.appendChild(content1);
    newtag.appendChild(newbtn1);
}
function remove(e)
{
//    console.log(1);
if(e.target.classList.contains('delete'))
{
    // console.log(1);
    if(confirm('are you sure?'))
    {
        // here we are dealing with button so it s parent would be li
       var lii = e.target.parentElement; 
       z.removeChild(lii);
    }
}
}

