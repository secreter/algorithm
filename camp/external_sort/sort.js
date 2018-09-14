/**
 * Created by pengchaoyang on 2018/9/13
 */
let fs = require("fs");
let stream = require("stream");
let buffers = [],i=-1,count=225000,times=10,step=count/times,buffer
// 创建可写流
let readerStream = fs.createReadStream('data',{highWaterMark:4 });     //22500000*4
readerStream.on('data',(chunk)=>{
    if(++i!==0&&(i%step)===0){
        console.log('pause',i,step)
        readerStream.pause()  //暂停写文件
        buffer=Buffer.concat(buffers)
        let sortedBuf=partionSort(buffer)
        writeToFile(sortedBuf,'partition'+i)
        readerStream.resume()
    }
    buffers.push(chunk)
    console.log(chunk,chunk.readUInt32BE(0))
})
// ReadStream.pause()暂停读取
// ReadStream.resume()重新开始读取
readerStream.on('end',()=>{
    console.log('end')
    buffer=Buffer.concat(buffers)
    let sortedBuf=partionSort(buffer)
    writeToFile(sortedBuf,'partition'+'end')
    consoleNum(sortedBuf)

})

/**
 * buf 按照uint32排序
 * @param buf
 * @returns {*}
 */
function partionSort (buf) {
    let len=buf.length/4,temp=new Buffer(4)
    console.log(len)
    for (let i=0;i<len;i++){
        for (let j=1;j<len;j++){
            if(buf.readUInt32BE((j-1)*4)>buf.readUInt32BE(j*4)){
                buf.copy(temp,0,(j-1)*4,j*4)
                buf.copy(buf,(j-1)*4,j*4,(j+1)*4)
                temp.copy(buf,j*4,0,4)
            }
        }
        // console.log(buf)
    }
    return buf
}

/**
 * 打印前30个元素
 * @param buf
 * @param l
 */
function consoleNum(buf,l=30){
    let len=buf.length/4,list=[]
    for(let i=0;i<l&&i<len;i++){
        list.push(buf.readUInt32BE(i*4))
    }
    console.log(list)
}

function writeToFile(buffer,filename){
    //创建一个直通流
    let bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);
    let writeerStream = fs.createWriteStream(filename);
    bufferStream.pipe(writeerStream)
}
