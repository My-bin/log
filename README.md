# log
<!-- 在webpak。config.js内引入 -->
```
const log = require("./plugin/log");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    ...,
    new log("📣📣📣"),
  ],
};
```
再plugins内进行配置，传入特殊符号
console.log("Hello clear-log") ----> console.log("Hello clear-log",'📣📣📣')
