var http = require('http');

function startServer(host, porta, comando){
    http.get({
        hostname: host,
        port: porta,
        path: comando,
        agent: false
    }, (res) => {
        console.log('Status da operação: ' + res.statusMessage);
        console.log('Cod Status da operação: ' + res.statusCode);
    });
}

function configServer(host, porta, scriptsfolder){
    http.get({
        hostname: host,
        port: porta,
        path: '/scripts/'+scriptsfolder,
        agent: false
    }, (res) => {
        console.log('Status da operação: ' + res.statusMessage);
        console.log('Cod Status da operação: ' + res.statusCode);
    });
}

function StartTest(host, porta, test){
    http.get({
        hostname: host,
        port: porta,
        path: '/run/'+test,
        agent: false
    }, (res) => {
        console.log('Status da operação: ' + res.statusMessage);
        console.log('Cod Status da operação: ' + res.statusCode);
    });
}

//é necessário exportar as funções para que elas estejam disponíveis em outro arquivo.
module.exports = {startServer, configServer, StartTest};