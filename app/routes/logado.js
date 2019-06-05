module.exports = function(application){
	application.get('/logado', function(req, res){
		application.app.controllers.logado.logado(application, req, res);
	});

	application.get('/sair', function(req, res){
		application.app.controllers.logado.sair(application, req, res);
	});
}