var http = require('http');
var Q = require('q');

//configurando o servidor REST para linguagem python
function configServerPython(host, porta, comando){
    var deferred = Q.defer();
    http.get({
        hostname: host,
        port: porta,
        path: comando,
        agent: false
    }, (res) => {
        console.log('Serv: ' + res.statusMessage);
        console.log('CodServer: ' + res.statusCode);
        //console.log(res.httpVersion);
        //console.log(res.trailers);
        //console.log(res.url);
        deferred.resolve(true);
    });
    return deferred.promise;
}
//setando a pasta dos scripts
function configScriptsfolder(host, porta, scriptsfolder){
    var deferred = Q.defer();
    http.get({
        hostname: host,
        port: porta,
        path: '/scripts/'+scriptsfolder,
        agent: false
    }, (res) => {
        console.log('Status da operação configServer: ' + res.statusMessage);
        console.log('Cod Status da operação configServer: ' + res.statusCode);
        deferred.resolve(true);
    });
    return deferred.promise;
}
//executando teste
function StartTest(host, porta, test){
    var deferred = Q.defer();
    http.get({
        hostname: host,
        port: porta,
        path: '/run/'+test,
        agent: false
    }, (res) => {
        console.log('Status da operação StartTest: ' + res.statusMessage);
        console.log('Cod Status da operação StartTest: ' + res.statusCode);
        deferred.resolve(true);
    });
    return deferred.promise;
}

function executeTeste(host, porta, scriptsfolder, test){
    var deferred = Q.defer();
    http.get({
        hostname: host,
        port: porta,
        path: '/scripts/'+scriptsfolder,
        agent: false
    }, (res) => {
        if (res.statusMessage == 'OK'){
            console.log('Path: ' + res.statusMessage);
            console.log('CodPath : ' + res.statusCode);
            http.get({
                hostname: host,
                port: porta,
                path: '/run/'+test,
                agent: false
            }, (res) => {
                console.log('Test: ' + res.statusMessage, test);
                console.log('CodTest: ' + res.statusCode, test);
                deferred.resolve(true);
            });
        } else {
            console.log('Erro ao configurar pasta dos testes =(');
            console.log('Path: ' + res.statusMessage);
            console.log('CodPath: ' + res.statusCode);
        }
        
    })

    
    return deferred.promise;
}
//configServerPython('10.50.62.154', 50001, '/startp');
//executeTeste('10.50.62.154', 50001, 'C:\\PIRAMIDE604\\ATIVOFIXO', 'TST1662054');

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {configServerPython, executeTeste};