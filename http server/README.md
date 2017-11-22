### http server基础

```javascript
http.server.js

let server = http.createServer((req,res) => {  // 创建一个http服务器
    res.statusCode = 200;  // 状态码

    res.setHeader("Content-Type","text/plain;charset=utf-8");  // 响应头设置值

    url.parse(req.url);  // 返回浏览器返回的url地址
    console.log('url:'+req.url);  // 字符串 /index.html?123
    console.log('parse:'+ url.parse(req.url));  // [object]

    util.inspect(url.parse(req.url));  // inspect调试模式,将一个对象转换成字符串进行输出
    console.log('inspect:'+ util.inspect(url.parse(req.url)));  // 展开object

    res.end(util.inspect(url.parse(req.url)));  // 输出结果
    //res.end(util.inspect(url.parse("http://localhost:3000/demo.html?a=123#tag")));  // 对完整的url进行解析
})

server.listen(3000, '127.0.0.1' , () =>{   // 监听端口
    console.log("服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/ 来进行访问(localhost:3000也行)")
})

```
req.url获取的不是完整的url,只是相对路径，并没有拿到主机，所以一下协议、主机那些值是空的，网址输入http://127.0.0.1:3000/index.html?123——==req.url==只是/index.html?123。

```javascript
说明：node http.server.js之后

1.浏览器输入http://127.0.0.1:3000

    输出的解析当前url的字符串结果
    
    Url {
      protocol: null,    --协议
      slashes: null,
      auth: null,
      host: null,   --主机
      port: null,   --端口
      hostname: null,  --主机名称
      hash: null,
      search: null,
      query: null,
      pathname: '/',
      path: '/',
      href: '/' }
      
2.浏览器输入：http://127.0.0.1:3000/index.html?id=123

    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?id=123',
      query: 'id=123',
      pathname: '/index.html',
      path: '/index.html?id=123',
      href: '/index.html?id=123' }

```
解析完整的url，直接解析完整的网址。但是当前nodeJs还是没办法获取到完整的url(req.url)。==express框架==可以获取到完整的url(==req.originalUrl==);

```javascript
代码修改：res.end(util.inspect(url.parse("http://localhost:3000/demo.html?a=123#tag")));
命令：node http.server.js
浏览器输入：http://127.0.0.1:3000

结果：
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3000',
  port: '3000',
  hostname: 'localhost',
  hash: '#tag',
  search: '?a=123',
  query: 'a=123',
  pathname: '/demo.html',
  path: '/demo.html?a=123',
  href: 'http://localhost:3000/demo.html?a=123#tag' }

```




















