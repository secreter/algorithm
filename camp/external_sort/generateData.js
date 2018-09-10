/**
 * Created by pengchaoyang on 2018/9/10
 */
let fs = require("fs");
let data = '';

// 创建可写流
let writeerStream = fs.createWriteStream('data');

// 设置编码为 utf8。
writeerStream.setEncoding('UTF8');