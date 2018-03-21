var sikulix = require('./restSikulix');
var port = 50001;
var server = '10.50.62.154';
var mysql = require('mysql');

//Criando conexão mysql
var con = mysql.createConnection({
    host: "10.50.62.154",
    user: "root",
    password: "teste",      
    database: "reef",
    port: 3306
  });



//executando uma query pra pegar os testes que não foram executados através de uma promise
let promise1 = new Promise((resolve, reject) => {
    con.connect(function(err){
        if (err) throw err;
        con.query("select * from reef.teste_historico th where th.estado = ''", function(err, result, fields){
            if (err) throw err;
            resolve(result);
            con.end();
        });
      });
});
//configurando o servidor REST para linguagem python
sikulix.configServerPython(server, port, '/startp');

//pegando o resultado da query
promise1.then((resultado) =>{
    //loop para percorrer todos os resultados
    for (var i in resultado){
        
        //var string = resultado[i].modulo;
        //formatando o caminho da pasta dos testes
        //var path = "C:\\PIRAMIDE604\\" + string.substr(13,(string.length - 13));
        //setando a pasta dos scripts
        sikulix.configScriptsfolder(server, port, resultado[i].modulo);
        //executando teste
        sikulix.StartTest(server, port, resultado[i].tst);
            
          }
});
