const fs=require('fs')
//同步调用
const data=fs.readFileSync('./download.js')
console.log(data)