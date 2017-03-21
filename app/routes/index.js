/**
 * Created by Nishant Mor on 13-03-2017.
 */
var express =  require('express');
var router = express.Router();

router.get('/' , function (request , response) {
    var data =  request.app.get('appData');
    response.render('index' , {
        pageTitle : 'Home',
        pageID : 'home'
    });
});


module.exports = router;