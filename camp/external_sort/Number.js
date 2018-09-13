/**
 * Created by pengchaoyang on 2018/9/11
 */
/*
自定义一个生成0-255数字的可读流
 */
const stream = require('stream')
 class RandomStream extends stream.Readable {
    constructor (options={}) {
        super(options)             // 传递参数
        this.count=options.count||10

    }
    // 实现_read方法
    _read (size) {
        while(this.count--){
            // let buf=Buffer.from([this.rand(), this.rand(), this.rand(), this.rand()]);
            let buf=Buffer.from([0, 0, 0, this.rand()]);
            // console.log(`size: ${buf.length} ${buf.readInt32BE(0)}`)  //大端，从从左到右读取
            // console.log( JSON.stringify(buf))
            this.push(buf, 'utf8')          // 向缓存中添加数据
        }
        this.push(null)
    }
    rand(){
        return ~~(Math.random()*255)
    }
}
module.exports=RandomStream
// let randomStream = new RandomStream({count:20})
// // 22500000
// randomStream.on('data', (chunk) => {
//     console.log(`read ${chunk}`)
// }).on('end', _ => console.log('end '))