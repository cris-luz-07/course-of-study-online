
module.exports = function(application){
	application.get('/entrada', function(req, res){
		application.app.controllers.entrada.entrada(application, req, res);
	});


	application.post('/entrada', function(req, res){
		application.app.controllers.entrada.entrada(application, req, res);
	});
}