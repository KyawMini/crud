const express=require('express')
const mongoose = require('mongoose');
const app=express();
// for mongoose connection
const UserControl = require('./controllers/UserControl');
const Router = require('./controllers/userController');
const url='mongodb+srv://kyaw_25:Kyaw_25@cluster0.6q79p.gcp.mongodb.net/test?retryWrites=true&w=majority'
// Router.post('/user',database.UserControl)
// Database
mongoose.connect(url, { useNewUrlParser: true })
 .then(() => console.log('Connected to database...'))
 .catch(err => console.error(err));
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);
var port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
console.log(`A journey on ${port}.......`);
})