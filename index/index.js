class log {
    constructor(icon) {
      this.icon = icon;
    }
    apply(compiler) {
      const _that = this
      const reg = /(console\.log\([^)]*\))/g;
      compiler.hooks.emit.tap("log", (compilation) => {
        Object.keys(compilation.assets).forEach((item) => {
          let content = compilation.assets[item].source();
          content = content.replace(reg, function (match, p1) {
            console.log(match, "!!!!!");
            return match.slice(0, -1) + `,'${_that.icon}')`;
          });
          // 更新构建产物对象
          compilation.assets[item] = {
            source: () => content,
            size: () => content.length,
          };
        });
      });
    }
  }
  module.exports = log;
  