const express=require('express')
const router = express.Router();
const app=express()
const feedController=require('../controllers/feed')
router.get('/post',feedController.getPosts)
const bodyParser=require('body-parser')
app.use(bodyParser.json())
router.post('/post',feedController.createPost)
router.get('/posts',feedController.getPosts)
module.exports=router;
