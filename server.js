// const express = require('express');
// const app=express();
// const employeeController=require('./controllers/employeeController')
// require('./models/db')
// app.use('/employee',employeeController)
// const path = require('path');
// const exphbs = require('express-handlebars');
// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({
//  extended: true
// }));
// app.use(bodyparser.json());


// // 4 . for path 
// app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout',
// layoutsDir: __dirname + '/views/layouts/' }));
// // starting veiw engine
// app.set('view engine', 'hbs');


    
    

// app.listen(3000,()=>{
//    console.log('Server is up on port 3000.')
//  })
require('./models/db');
const express = require('express');
// 3 . for express handlebar and body parser
const path = require('path');
const exphbs = require('express-handlebars');
// 5 . to encode url
const bodyparser = require('body-parser');
// 2 . for route file
const employeeController=require('./controllers/employeeController')
//5. to encode url
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
///

// 4 . for path
app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout',layoutsDir: __dirname + '/views/layouts/' }));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts', runtimeOptions: {allowProtoPropertiesByDefault: true,allowProtoMethodsByDefault: true,}}))
// starting veiw engine
app.set('view engine', 'hbs');
app.listen(3000, () => {
 console.log('Express server started at port : 3000');
});
// 2. using route file
app.use('/employee',employeeController)
