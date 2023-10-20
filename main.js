// axios globals
// axios.defaults.headers.common['X-Auth-Token'] ='sometoken'


// GET REQUEST
function getTodos() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5", {timeout : 5})
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => console.log(err));
//     axios({
//         method : 'get',
//         url : 'https://jsonplaceholder.typicode.com/todos',
//         params : {
//             _limit : 5
//         },

//     }).then( res => {console.log(res); showOutput(res)} )
//  .catch( err => console.log(err));
  }
  
  // POST REQUEST
  function addTodo() {
    // console.log('POST Request');
    axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
        title : "hello naveeb",
        completed : false
    })
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => console.log(err));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    // console.log('PUT/PATCH Request');
    axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
        title : "updated hello krs",
        completed : false,
    
    }
    )
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => console.log(err));
    // axios.patch("https://jsonplaceholder.typicode.com/todos/1",{
    //     title : "updated hello krs",
    //     completed : false,
    
    // }
    // )
    // .then( res => {console.log(res); showOutput(res)} )
    // .catch( err => console.log(err));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    // console.log('DELETE Request');
    axios.delete("https://jsonplaceholder.typicode.com/todos/1"
    )
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => console.log(err));

  }

//   for put patch and delte request u need t0 pass id with the url a resource
  
  // SIMULTANEOUS DATA
  function getData() {
    // console.log('Simultaneous Request');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    // .then(res =>{
    //     console.log(res[1]);
    //     console.log(res[0]);
    //     showOutput(res[0]);
    // })
    .then(axios.spread( (todos, pots)=>{
      console.log(todos,pots)
    }))
    .catch(err =>{
        console.log(err);
    })
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    // console.log('Custom Headers');
    const config = {
        headers :{
            'Content-Type':'application/json',
            Authorization : 'sometoken',
            
        }
    };

    axios.post("https://jsonplaceholder.typicode.com/todos?_limit=5",{
        title : "hello naveeb",
        completed : false
    }, config )
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => console.log(err));


  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    // console.log('Transform Response');
    const options = {
        method : 'post',
        url : 'https://jsonplaceholder.typicode.com/todos',
        data:{
            title : " hello world"
        },
        transformResponse : axios.defaults.transformResponse.concat(data =>{
            data.title = data.title.toUpperCase();
            return data;
        })

    }
    axios(options).then(res => showOutput(res))
  }

//   globals

  
  // ERROR HANDLING
  function errorHandling() {
    // console.log('Error Handling');
    axios.get("https://jsonplaceholder.typicode.com/todoss")
    .then( res => {console.log(res); showOutput(res)} )
    .catch( err => {
        if(err.response)
        {
            console.log(err.response.status);
            console.log(err.response.header);
            alert("page not found");
        }
        else if(err.request){
          console.error(err.request);
        }
        else{
            console.error(err.msg);
        }
    });

  }
  
  // CANCEL TOKEN
  function cancelToken() {
    // console.log('Cancel Token');
    const source = axios.CancelToken.source();
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{
        cancelToken : source.token
    })
    .then( res => {console.log(res); showOutput(res)} )
    .catch(thrown =>{ 
        if(axios.isCancel(thrown)){
            console.log('Reuest canceled', thrown.message);
        }
    });

    if(true){
        source.cancel('request canceled');
    }
    
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use((config)=>{
    console.log(`${config.method} sent to ${config.url}`)
    return config;
  })
  , (error) =>{
    return Promise.reject(error);
  } 
  
  // AXIOS INSTANCES

  const axiosInstance = axios.create({
    baseURL :'https://jsonplaceholder.typicode.com'
    
  });
//   axiosInstance.get('/comments').then(res=> showOutput(res))
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);