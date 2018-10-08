/**
 * Created by pengchaoyang on 2018/9/30
 */
let fs = require("fs");
let stream = require("stream");
let fds =[],writeStream=null,partitionMins=new Array(10).fill(0).map(()=>Buffer.alloc(4)),positions=new Array(10).fill(0)
for(let i=0;i<10;i++){
    fds[i]=fs.openSync('partition'+(i+1),'r')
    //fs.readSync(fd, buffer, offset, length, position)
    fs.readSync(fds[i],partitionMins[i],0,4,positions[i])
    positions[i]+=4

}
while(!isEnd()){
    let {min,index}=getMin()
    let bytesRead=fs.readSync(fds[index],partitionMins[index],0,4,positions[index])

    console.log(index,min.readUInt32BE(0))
    fs.writeFileSync('result',min,{flag:'a'})

    if(bytesRead===0){
        partitionMins[index]=null        //排完一个文件
    }else{
        partitionMins[index]=min
    }
    positions[index]+=4

}



function getMin () {
    let minIndex=partitionMins.findIndex(x=>x!==null),min=partitionMins[minIndex]
    for(let i=0;i<partitionMins.length;i++){
        if(partitionMins[i]!==null&&partitionMins[i].readUInt32BE(0)<min.readUInt32BE(0)){
            min=partitionMins[i]
            minIndex=i
            // console.log(minIndex)
        }
    }
    return {
        min,
        index:minIndex
    }
}

function isEnd () {
    return partitionMins.filter(x=>x!==null).length===0
}

function consoleNum(buf,l=50){
    let len=buf.length/4,list=[]
    for(let i=0;i<l&&i<len;i++){
        list.push(buf.readUInt32BE(i*4))
    }
    console.log(list)
}
