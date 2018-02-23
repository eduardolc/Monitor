var sikulix = require('./teste2');
var port = 50001;
var server = '10.50.62.154';
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "10.50.62.154",
    user: "root",
    password: "teste",      
    database: "reef",
    port: 3306
    });

let promise1 = new Promise((resolve, reject) => {
    con.connect(function(err){
        if (err) throw err;
        con.query("select * from reef.teste_historico th where th.id between '3150' and '3152'", function(err, result, fields){
            if (err) throw err;
            resolve(result);
            con.end();
        });
      });
});

sikulix.startServer(server, port, '/startp');

promise1.then((resultado) =>{
    for (var i in resultado){
        sikulix.configServer(server, port, resultado[i].modulo);
        sikulix.StartTest(server, port, resultado[i].tst);
            //console.log(resultado[i].tst);
            //console.log(resultado[i].modulo);
          }
});
//con.connect();

//var query = con.query("select * from reef.teste_historico th where th.id between '3150' and '3152'");

//console.log(query.RowDataPacket('result'));
 
//var resultado;

//query.on('result', function(row) {
    //console.log(row);
    //this.resultado = row;
  //  });

//console.log(resultado);
/*resultado = con.connect(function(err){
    if (err) throw err;
    con.query("select * from reef.teste_historico th where th.id between '3150' and '3152'", function(err, result, fields){
        if (err) throw err;
        console.log(result[0].id);
        con.end();
    });
  });

console.log(resultado);
*/

//for (var i in resultado){
//    console.log(resultado[i].tst);
//    console.log(resultado[i].modulo);
//  }
//console.log(resultado);




//for (let index = 0; index < resultado.length; index++) {
  //  console.log(array[index].tst);
    //console.log(array[index].modulo);
    //const element = array[index];
    //sikulix.StartTest('localhost', port, element);
    



//
//sikulix.configServer('localhost', port, '\\PIRAMIDE604\\ATIVOFIXO');

//var array = ["TST1662059", "TST1662054", "TST1662060", "TST1664435", "TST1664575"];