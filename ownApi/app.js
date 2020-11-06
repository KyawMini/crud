const express=require('express');
const app=express();
const feedRoutes=require('./routes/feed')
app.use('/feed',feedRoutes)
app.listen(8080,(err)=>{
    console.log('Server is on 8080');
})