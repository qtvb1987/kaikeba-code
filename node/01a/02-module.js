//const os=require('os')
//const men=os.freemem()/os.totalmem()*100
//console.log(`内存点用率${men.toFixed(2)}%`)
const repo = 'github:su37josephxia/vue-template';
const desc = '../test';
const{clone}=require('./download')

clone(repo,desc)

//download(repo,desc,err=>{
    //console.log(err?'Error':'Success')
  //  if(err)
  //  {
  //      process.fail()
  //  }else{
  //      process.succeed()
  //  }
//})