/**
 * Created by pengchaoyang on 2018/10/16
 */
async function main(){
  console.log('start')
  await loop();
  console.log('end')
}

async function loop(){
  let i = 0;
  while(true) {
    console.log('loop:', i++)
    await sleep(1000)
  }
}

function loop2 () {
  let i = 0;
  return Promise.resolve().then(function () {
    let loopBody=()=> {
      console.log('loop:', i++)
      Promise.resolve().then(function () {
        sleep(1000).then(res => {
          loopBody()
        })
      })
    }
    loopBody()
  })

}


function sleep(time){
  return new Promise((resolve)=>{
    setTimeout(resolve,time)
  })
}

main()