let x = document.querySelector('#item');
let x1 = document.querySelector('#item1');
let y = document.querySelector('#addForm');
let z = document.querySelector('#items');
let filter = document.querySelector('#filter');

y.addEventListener('submit', additem);
z.addEventListener('click' , remove);
filter.addEventListener('keyup', filteritem);


function additem(e)
{
    e.preventDefault();
    let newtag = document.createElement('li');
    newtag.className='list-group-item';
    newtag.style= "display:flex";
    let a = document.createTextNode(x.value+" "+x1.value);
    // let a1 = document.createTextNode(x1.value);
    newtag.appendChild(a);
    z.appendChild(newtag);
    let newtag1 = document.createElement('div');
    
    let newbtn1 = document.createElement('button');
    let content1 = document.createTextNode("edit");
    newbtn1.appendChild(content1);
    newtag1.appendChild(newbtn1);
    let newbtn = document.createElement('button');
    let content = document.createTextNode("X");
    newbtn.appendChild(content);
    newbtn.className ="btn btn-danger btn-sm float-right delete"
    newtag1.appendChild( newbtn);
    x.value =""; 

    
    // let newbtn1 = document.createElement('button');
    // let content1 = document.createTextNode("edit");
    // newbtn1.appendChild(content1);
    newtag.appendChild(newtag1);
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
       var lii = e.target.parentElement.parentElement; 
       z.removeChild(lii);
    }
}
}
function filteritem(e){
    var text = e.target.value.toLowerCase();
    // console.log(text);
    let m = document.querySelectorAll('li');
    Array.from(m).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}
