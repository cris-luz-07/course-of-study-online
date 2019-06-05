/* importar o mongodb */
let mongo = require('mongodb');

let connMongoDB = function(){
	console.log('Entrou na função de conexão');
	let db = new mongo.Db(
		'edu',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}