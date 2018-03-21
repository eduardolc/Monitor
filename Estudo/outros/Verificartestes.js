var mysql = require('mysql');
var async = require('async');
var Q = require('q');

/*var con = mysql.createConnection({
    host: "10.50.62.154",
    user: "root",
    password: "teste",
    database: "db_teste_reef",
    port: 3306
});

function pegarTestesPendentes(query){
    var deferred = Q.defer();
    con.connect(function(err) {
        if (err) throw err;
            con.query(query, function (err, result) {
                if (err) throw err;
                //console.log(result);
                deferred.resolve(result);
            });
    });
    return deferred.promise;
}


var query = "SELECT * FROM db_teste_reef.hosts where status = 'livre'";
var prom = pegarTestesPendentes(query);

//var teste = [];
*/
/*
pool = mysql.createPool({
    host: "10.50.62.154",
    user: "root",
    password: "teste",      
    database: "db_teste_reef",
    port: 3306
});

pool.getConnection(function(err, connection){
     
    connection.query("SELECT * FROM db_teste_reef.teste_historico", function(err, rows){
        connection.query("SELECT * FROM db_teste_reef.hosts", function(err, hrows){                        
        });
        
        
        for (var i in rows){
            //teste.push(rows[i]);
            //console.log(rows[i]);
        }                            
    });
*/



    //connection.query("SELECT * FROM db_teste_reef.hosts", function(err, hrows){
        //for (var i in hrows){
            //console.log(hrows[i].ip);
       // }                            
    //});
    //return testespendentes
    console.log(testespendentes.pool);
//});

//console.log(result);