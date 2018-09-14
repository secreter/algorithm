/**
 * Created by pengchaoyang on 2018/9/10
 */
let fs = require("fs");
let RandomStream = require("./Number");
//22500000
let randomStream = new RandomStream({count:2250000})
let data = '';

// 创建可写流
let writeerStream = fs.createWriteStream('data');

randomStream.pipe(writeerStream)