// node 访问html静态资源
let http = require('http');
let url = require('url');
let util = require('util');

let fs = require('fs');  // 文件系统

let server = http.createServer((req,res) => {  // 创建一个http服务器
    // url.parse(req.url);  // 返回浏览器返回的url地址
    // console.log('url:'+req.url);  // 字符串 /index.html?123
    // console.log('parse:'+ url.parse(req.url));  // [object]
    var pathname = url.parse(req.url).pathname;  // 获取html的文件名：/index.html
    fs.readFile(pathname.substring(1),function(err,data){
        if(err){
            res.writeHead(404,{   // 发送一个响应头给请求
                'Content-Type':'text/html'
            });
        }else{
            res.writeHead(200,{
                'Content-Type':'text/html'
            });

            res.write(data.toString());
        }

        res.end();  // 结束
    });

})

server.listen(3000, '127.0.0.1' , () =>{   // 监听端口
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/ 来进行访问(localhost:3000也行)")
})


// node server.js
// localhost:3000/index.html









