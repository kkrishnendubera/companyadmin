const express=require('express')
const ejs=require('ejs')
const path=require('path')
const app=express()



app.use(express.static(path.join('public')))

app.set('view engine','ejs')
app.set('views','views')

const router = require('./router/companyrouter')
app.use(router)


const port=7071
app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`)
})