var mysql = require('mysql');

//conexao com banco de dados mySql
var connection = mysql.createConnection({
  host     : '10.50.62.154',
  user     : 'root',
  password : 'teste',
  database : 'reef'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.end();

//encerrando conexao com banco de dados