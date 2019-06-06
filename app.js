/* importar as configurações do servidor */
let app = require('./config/server');

app.get('/', function(req, res) {
    res.render('index', {validacao: {}});
});

/* parametrizar a porta de escuta */
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
