window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){
  
    }
    nodes.html = function(){}
    return nodes
  }
  
  window.jQuery.ajax = function(options){
    let url 
    if(arguments.length === 1){
      url = options.url
    }else{
      url = arguments[0],
      options = arguments[1]
    }
    let url = options.url
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers
  
    //es6 析构赋值
    //let {url,method,body,successFn,failFn,headers} = options 
    
    let request = new XMLHttpRequest();
    //request.open('GET','/xxx')
    request.open(method,url)
    for(let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = function(){
        if(request.readyState === 4){
          if(request.status >= 200 && request.status < 300){
            successFn.call(undefined,request.responseText)
     
          }else if(request.status >= 400){
            successFn.call(undefined,request)
          
          }
        }
    }
   
    request.send(body)
  }
  window.$ = window.jQuery;
  
  myButton.onclick = function(e){
    window.jQuery.ajax({
      url:'/xxx',
      method:'post',
      headers: {
        'content-type':'application/x-www-form-urlencoded',
        'frank': '18'
      },
      successFn:(result)=>{console.log(result)},
      failFn:(e)=>{console.log(e.responseText)}
    })
  }