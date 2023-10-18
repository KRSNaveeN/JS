let posts = [{title:"ram"},{title:"naveen"}];
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve(posts);
        },2000)
    })

}

function getPost(){
    return new Promise((resolve,reject)=>{
   
        setTimeout(()=>{
            if(posts.length>=0){
                let li='';
        // console.log(posts);
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
createPost({title:"ravan"}).then(()=>{getPost()});


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

Promise.all([createPost({title:"laxmi"}), updateLastUserActivityTime()]).then((values)=>{console.log(values); return deletePost()}).then((ans)=>{console.log(ans)});
