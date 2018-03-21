var Q = require('q');
var mysql = require('mysql');

//Criar pool de conexão com o banco de dados
pool = mysql.createPool({
    host: "10.50.62.154",
    user: "root",
    password: "teste",      
    database: "db_teste_reef",
    port: 3306
});

//Função para pegar a lista de testes pendentes
function verifTest(){
    var deferred = Q.defer();
    pool.getConnection(function(err, connection){
        connection.query("SELECT * FROM db_teste_reef.teste_historico WHERE estado = ''", function(err, rows){
            deferred.resolve(rows);
        });
    });
    return deferred.promise;
}

//Função para pegar os host disponiveis
function veriHost(){
    var deferred = Q.defer();
    pool.getConnection(function(err, connection){
        connection.query("SELECT * FROM db_teste_reef.hosts WHERE status = 'livre'", function(err, hrows){
            deferred.resolve(hrows);                        
        });
    });
    return deferred.promise;
}

//exportar funções
module.exports = {verifTest, veriHost};
