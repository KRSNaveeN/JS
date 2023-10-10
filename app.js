// axios.defaults.headers.common['X-Auth-Token'] ='sometoken'

let y = document.querySelector('#addbill');
y.addEventListener("click", x);
let count  =1;
let count2 = 1;
let count3 = 1;

// console.log(document.querySelector('#ram').value)

function x(){
   let selectedvalue =  document.querySelector('#select').value;
  
   let pricevalue = document.querySelector('#price').value;
   
   let productvalue = document.querySelector('#product').value;
   let newelement = document.createElement('p');
   let b = "price is"+ pricevalue+"  - ordered"+productvalue;
   newelement.textContent=b+" ";

   
   
   let newbtn = document.createElement('button')
   newbtn.textContent="delete";

//    const config = {
//     headers :{
//         'Content-Type':'application/json',
//         Authorization : 'sometoken',
        
//     }
// };

    
  //  axios.post("https://crudcrud.com/api/760f0d3181fb4768a613d76b32294da4/allow-cors",{price:"pricevalue", product:"productvalue", id:1});

    if(selectedvalue == 'table1' && count == 1){
       let m = document.querySelector('#t1');
        count++;
      
        localStorage.setItem("VALUE1", b);
       newbtn.setAttribute("class","table1");

       m.appendChild(newelement);
       m.appendChild(newbtn);
       
      
      document.querySelector('.table1').addEventListener('click', ()=>{remove( newbtn, newelement); localStorage.removeItem('VALUE1'); count--});
    
      // axios.post("https://crudcrud.com/api/760f0d3181fb4768a613d76b32294da4",{price:"pricevalue", product:"productvalue", id:1});
    }

   else if(selectedvalue == 'table2' && count2 ==1){
        let m = document.querySelector('#t2');
        count2++;

        localStorage.setItem("VALUE2", b);
        newbtn.setAttribute("class","table2");

        m.appendChild(newelement);
        m.appendChild(newbtn);
        
        
      document.querySelector('.table2').addEventListener('click', ()=>{remove( newbtn, newelement); localStorage.removeItem('VALUE2'); count2--;});
       
     }
     else if(selectedvalue == 'table3' && count3 == 1){
        let m = document.querySelector('#t3');
        newbtn.setAttribute("class","table3");
        count3++;
        localStorage.setItem("VALUE3", b);
        m.appendChild(newelement);
        m.appendChild(newbtn);
        
      document.querySelector('.table3').addEventListener('click', ()=>{remove( newbtn, newelement); localStorage.removeItem('VALUE3'); count3--});

     }

     function remove(a1,a2){

                a1.remove();
                a2.remove(); 

     }
    }
    console.log("running");

    function reload(){
      let x =  document.querySelector('#t1');
      let x2 = document.querySelector('#t2');
      let x3 = document.querySelector('#t3');
      let z= localStorage.getItem('VALUE1');
      let z2= localStorage.getItem('VALUE2');
      let z3= localStorage.getItem('VALUE3');

      
      let newbtn = document.createElement('button')
      let newbtn2 = document.createElement('button')
      let newbtn3 = document.createElement('button')
      let y = document.createElement('p');
      let y2 = document.createElement('p');
      let y3 = document.createElement('p');
     
      if(z != null){
      
      console.log(z);
      count++;

     
      y.textContent=z;
      x.appendChild(y);

      
      x.appendChild(newbtn);
      newbtn.setAttribute('class', 'table1')
      newbtn.textContent="delete";
      document.querySelector('.table1').addEventListener('click', ()=>{y.remove(); newbtn.remove(); count--; localStorage.removeItem('VALUE1'); })
      }

      if(z2 != null){
      
        console.log(z2);
        count2++;
  
       
        y2.textContent=z2;
        x2.appendChild(y2);
  
        
        x2.appendChild(newbtn2);
        newbtn2.setAttribute('class', 'table2')
        newbtn2.textContent="delete";
        document.querySelector('.table2').addEventListener('click', ()=>{y2.remove(); newbtn2.remove(); count2--; localStorage.removeItem('VALUE2'); })
        }
  
        if(z3 != null){
      
            console.log(z3);
            count3++;
      
           
            y3.textContent=z3;
            x3.appendChild(y3);
      
            
            x3.appendChild(newbtn3);
            newbtn3.setAttribute('class', 'table3')
            newbtn3.textContent="delete";
            document.querySelector('.table3').addEventListener('click', ()=>{y3.remove(); newbtn3.remove(); count3--; localStorage.removeItem('VALUE3'); })
            }
      
    
    }

    reload();
    //  axios.get("https://crudcrud.com/api/760f0d3181fb4768a613d76b32294da4").then((msg)=>{console.log(msg)});
    // axios.post("https://crudcrud.com/api/760f0d3181fb4768a613d76b32294da4/allow-cors", {name:"krs", id:1}).then((ms)=>{console.log(ms)});
    // let x5 =  axios.get("https://crudcrud.com/api/760f0d3181fb4768a613d76b32294da4/1");
    // console.log(x5);
