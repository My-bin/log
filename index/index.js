class log {
  constructor(icon) {
    this.icon = icon;
  }
  apply(compiler) {
    const _that = this;
    // 正则表达console.log()
    const reg = /(console\.log\((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*\))/g;
    compiler.hooks.emit.tap("log", (compilation) => {
      // 遍历所有的构建产物
      Object.keys(compilation.assets).forEach((item) => {
        // 获取当前构建产物的源代码
        let source = compilation.assets[item].source();
        // 如果是函数，执行以获取字符串
        if (typeof source === "function") {
          source = source(); 
        }
         // 检查source是否是字符串
        if (typeof source === "string") {
          // 使用正则表达式替换源代码中的 console.log() 语句
          source = source.replace(reg, function (match, p1) {
            const args = match.slice(12, -1) 
            const newArgs = args.split(",").map(item => {
              return _that.customLog(item)
            }).join(',');
            return `console.log(${newArgs},'${_that.icon}')`;
          });
          // 更新构建产物对象
          compilation.assets[item] = {
            source: () => source, // 返回函数
            size: () => source.length,
          };
        } else {
          console.error("Error: Compilation asset source is not a string.");
        }
      });
    });
  }
  customLog(variableValue) {
    if(variableValue.includes("'") || variableValue.includes('"')){
      return  variableValue
    }else{
      let str = variableValue.split('').map(item => item.toString()).join('');
      return  `'${str}=',${variableValue}`
    }
  }
}
module.exports = log;
