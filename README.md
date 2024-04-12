## 下载
``` javascript
npm i y-clear-log
```
## 引入配置
```javascript
const log = require("y-clear-log");
module.exports = {
 plugins: [
      new log('🚀🚀🚀')
    ]
}
```
## 效果
```javascript
currentRole: 'adminDashboard',
obj:{
     id:1,
     name:1,
     age:1
    },
console.log(obj)//浏览器的Console则显示为  obj={id:1,name:1,age:1} 🚀🚀🚀
//当然你也可以打印多个
console.log(currentRole,obj) //currentRole= adminDashboard obj={id:1,name:1,age:1} 🚀🚀🚀
```

## 说明
您可以配置您喜欢的图标(*当然是可以被解析的)<br/>
该插件目前只对webpack做了处理，暂无兼容到vite，后期会逐渐进行迭代处理。当然如果您有什么建议欢迎提出，当前插件也有一些缺陷暂未优化，比如直接打印字符串的话console.log('String')那么控制台指挥显示为 String🚀🚀🚀，并不会像上面那种显示。目前正在进行解决