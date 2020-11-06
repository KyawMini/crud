// const mongoose=require('mongoose')
// mongoose.connect('mongodb+srv://kyaw_25:Kyaw_25@cluster0.6q79p.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
// {useNewUrlParser:true},(err)=>{
//  if(!err){
//  console.log('MongooDB Connection Succeeded')
//  }else{
//  console.log('error in db connection :'+err)
//  }
// })
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://kyaw_25:Kyaw_25@cluster0.6q79p.gcp.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
 if(!err){
 console.log('MongooDB Connection Succeeded')
 }else{
 console.log('error in db connection :'+err)
 }
})
require('./employee.model');
