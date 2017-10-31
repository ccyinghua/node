// node调用第三方接口
let http = require('http');
let util = require('util');

http.get('http://www.imooc.com/u/card',function(res){
    let data = '';
    res.on('data',function(chunk){
        data += chunk;
    });

    res.on("end",function(){
        let result = JSON.parse(data);
        // util.inspect(result);
        console.log("result:"+util.inspect(result));
    });
})

// node client.js
// result:{ result: -11, data: '', msg: '没有登录' }











