var http = require('http');
var Q = require('q');

//configurando o servidor REST para linguagem python
function configServerPython(host, porta, comando){
    var deferred = Q.defer();

    //Função responsávol por enviar a requisição http para o serviço Rest do sikulix
    http.get({
        hostname: host,
        port: porta,
        path: comando,
        agent: false

    }, (res) => {
        console.log('Serv: ' + res.statusMessage);
        console.log('CodServer: ' + res.statusCode);
        deferred.resolve(true);

    });
    return deferred.promise;
}

//Função responsável por configurar a pasta dos scripts e executar os mesmo.
function executeTeste(host, porta, scriptsfolder, test){
    var deferred = Q.defer();

    //Função responsávol por enviar a requisição http para o serviço Rest do sikulix
    http.get({
        hostname: host,
        port: porta,
        path: '/scripts/'+scriptsfolder,
        agent: false

    }, (res) => {

        if (res.statusMessage == 'OK'){
            console.log('Path: ' + res.statusMessage);
            console.log('CodPath : ' + res.statusCode);
            //Função responsávol por enviar a requisição http para o serviço Rest do sikulix
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

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {configServerPython, executeTeste};