class log {
  constructor(icon) {
    this.icon = icon;
  }
  apply(compiler) {
    const _that = this;
    const reg = /(console\.log\([^)]*\))/g;
    compiler.hooks.emit.tap("log", (compilation) => {
      Object.keys(compilation.assets).forEach((item) => {
        let source = compilation.assets[item].source();
        if (typeof source === "function") {
          source = source(); // 如果是函数，执行以获取字符串
        }
        if (typeof source === "string") {
          // 检查source是否是字符串
          source = source.replace(reg, function (match, p1) {
            return match.slice(0, -1) + `,'${_that.icon}')`
            // return match.slice(0, -1) + `,'${_that.icon}')`;
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

}
module.exports = log;
