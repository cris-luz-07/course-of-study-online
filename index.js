/* importar o módulo do framework express */
let express = require('express');

/* importar o módulo do consign */
let consign = require('consign');

/* importar o módulo do body-parser */
let bodyParser = require('body-parser');

/* importar o módulo do express-validator */
let expressValidator = require('express-validator');

/* importar o módulo do express-session */
let expressSession = require('express-session');

/* iniciar o objeto do express */
let app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.get('/', function(req, res) {
    res.send(index.js);
});

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/* configura o middleware express-session */
app.use(expressSession({
	secret: 'lklkljjkjjhjkkk',
	resave: false,
	saveUninitialized: false
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* parametrizar a porta de escuta */
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
