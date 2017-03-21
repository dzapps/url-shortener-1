var express =  require('express');
var app = express();
var reload = require('reload')

app.set('port' , process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.set('views','app/views')

app.locals.siteTitle = 'Roux Meetups'


app.use(express.static('app/public'))
app.use(require('./routes/index'))
app.use(require('./routes/short'))



var server = app.listen(app.get('port') , function () {
    console.log('Listening on port ' + app.get('port'))
})

reload(server, app);