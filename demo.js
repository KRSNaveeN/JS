let posts = [{title:"ram"},{title:"naveen"}];
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            console.log("inside createpost");
            resolve(posts);
        },2000)
    })

}

async function asyncronous(post){
  await createPost(post) ;
 await getPost();
 console.log("got the posts")

 return posts;
}
function getPost(){    
    return new Promise((resolve,reject)=>{
   
        setTimeout(()=>{
            if(posts.length>=0){
                let li='';
        console.log("inside getpost");
        posts.forEach((post)=>{
             li +=`<li>${post.title}</li>`;
            //  console.log(li);
        })
         document.body.innerHTML = li;
        resolve();
            }
            else{
                reject("error");
            }

        },1000)
    })
}

// asyncronous({title:"laksmi"}).then((x)=>{console.log(x)});

// async functions returns aa promise and you can perform .then on it and you can also use try catch block on it for error catching

// 
// createPost({title:"ravan"}).then(()=>{getPost()});


// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve("p1")}, 2000)
// });

// let p2 = 10;

// let p3 = Promise.resolve("p3");

// Promise.all([p1, p2, p3]).then((values)=>{console.log(values)});

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let x = new Date()
            let y  = x.getHours();
            let z = x.getMinutes();
            let ans = `${y}hrs ${z}mins`;
            resolve(ans);
        },1000)
    })
}


 async function delete1(){
    await deletePost();
    console.log("post deleted")
    return 0;

};

function deletePost(){
    return new Promise((resolve, reject)=>{

        posts.pop();
        if(posts.length>0)
        {
            resolve(posts);
        }
        else{
            reject("no posts")
        }
       
       
    })
}



// Promise.all([createPost({title:"laxmi"}), updateLastUserActivityTime()]).then((values)=>{console.log(values); return deletePost()}).then((ans)=>{console.log(ans)});

let wifebringstickets = async ()=>{
    
    let x = new Promise((resolve,reject)=>{
        
        
        setTimeout(()=>{console.log("wife brings tickets"); resolve()},3000);
        
        
    });

    let y = new Promise((resolve,reject)=>{
        
        
        setTimeout(()=>{console.log("husband brings butter"); resolve()},3000);
    })
    function z(){
        console.log("they go inside");
    }
    await x;
    console.log("husband says lets go0");
    console.log("but wife says hungry");
    

    await y;
    console.log("husband brings popcorn");
        console.log("wife needs butter too");
    z();
//  console.log("4")
    
    return "person3";
}
console.log("person1");
console.log("person2")
wifebringstickets().then((ans)=>{console.log(ans)});
console.log("person4")
