/* importar as configurações do servidor */
let app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});