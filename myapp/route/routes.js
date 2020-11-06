// module.exports = function(app){

//     var jobs = require('../controllers/useController.js');

//     app.all('/postjob', function(req, res){
//         if (typeof req.session !== 'undefined' && req.session.user) {
//             res.redirect('/');
//         }
//         res.render('pages/login', {msg:req.session.msg});
//     });

//     app.post('/postjob', jobs.createJob);
// }