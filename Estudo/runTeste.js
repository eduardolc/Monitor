var Q = require('q');
var mysql = require('mysql');
var async = require('async');
var sikulix = require('./restSikulix');
//Porta padrão
var portRS = 50001;
var hostLivre = "";

pool = mysql.createPool({
    host: "10.50.62.154",
    user: "root",
    password: "teste",      
    database: "db_teste_reef",
    port: 3306
});

function verifTest(){
    var deferred = Q.defer();
    pool.getConnection(function(err, connection){
        connection.query("SELECT * FROM db_teste_reef.teste_historico WHERE estado = ''", function(err, rows){
            deferred.resolve(rows);
        });
    });
    return deferred.promise;
}

function veriHost(){
    var deferred = Q.defer();
    pool.getConnection(function(err, connection){
        connection.query("SELECT * FROM db_teste_reef.hosts WHERE status = 'livre'", function(err, hrows){
            deferred.resolve(hrows);                        
        });
    });
    return deferred.promise;
}

function runTestAuto(tst, host){
    var deferred = Q.defer();
    console.log(tst[0].tst, host[0].ip);
    deferred.resolve(true);
    return tst+' = '+host;
}




/*veriHost()
    .then(function(host){
        hostLivre += host[0].ip;
        //console.log(hostLivre);
        return verifTest();
    }).then(function(testes){
        if (hostLivre){
            console.log('Maquina Disponivel!');
            sikulix.configServerPython(hostLivre, portRS, '/startp');
            sikulix.configScriptsfolder(hostLivre, portRS, testes[0].modulo);
            async.each(testes, function(err, contents){
                sikulix.StartTest(hostLivre, portRS, testes[0].tst);
            });
        }
        console.log('Finalizado');
    });
*/

module.exports = {verifTest, veriHost};
