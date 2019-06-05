module.exports.logado = function(application, req, res){

	if(req.session.autorizado){
		res.render("logado");
	} else {
		// res.send('Usuário precisa fazer login');
		res.render("index", {validacao: {}});
	}
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}