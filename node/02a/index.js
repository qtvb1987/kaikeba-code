const Koa=require('koa')
const app=new Koa()
app.use((ctx,next)=>{
    ctx.body=[
        {
            name:'tom'
        }
    ]
    console.log('1')
    next();
    console.log('1 end')
})
app.use((ctx,next)=>{
    
    console.log('url'+ctx.url)
     
})
app.listen(3000)