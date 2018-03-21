module.exports = function(funcalCall){
    console.log('Executando teste');
    //setTimeout(() =>{
    var http = require('http');

    http.get({
        hostname: 'localhost',
        port: 50001,
        path: '/startp',
        agent: false
    }, (res) => {
        console.log('Status da operação: ' + res.statusMessage);
        console.log('Cod Status da operação: ' + res.statusCode);
        //callback('Teste Executado');
        funcalCall('Teste Executado');
    });
    
    //}, 5000);

    var sum = function(numero){
        var total = 2 + 2;
        console.log(total);
    }

}