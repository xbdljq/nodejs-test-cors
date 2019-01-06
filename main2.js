myButton.onclick = function(e){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4){
          console.log('请求响应都完毕了')
          if(request.status >= 200 && request.status < 300){
            console.log('说明请求成功')
          }else if(request.status >= 400){
            console.log('说明请求失败') 
          }
        }
    }
    request.open('GET','/xxx')
    request.send()
    console.log(request.readyState)
  }