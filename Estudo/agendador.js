const  CronJob = require('cron').CronJob
var testeRun = require('./runTeste');
var sikulix = require('./restSikulix');

var hosts = [];
var tst = [];
var path = "";
var portRS = 50001;
var n = 0
// Função para verificar e executar os testes pendentes
function executeTestes(){

    testeRun.verifTest() // Função para pegar no banco os testes pendentes
        .then(function (rows){
            if (rows.length > 0){

                tst = rows;
                return testeRun.veriHost();// Função para pegar a lista de hosts disponiveis   
            } else {

                console.log('Sem Teste');
            }
        }).then(function(hrows){

            if (hrows.length > 0){
                hosts = hrows;
            }else {

                console.log('Sem hots');
            }
        }).then(function(){       

            for(var i = 0; i < hosts.length; i++){

                sikulix.configServerPython(hosts[i].ip, portRS, '/startp'); // Função para selecionar a limguagem do script
                sikulix.executeTeste(hosts[i].ip, portRS, tst[i].modulo, tst[i].tst); // Função para executar o script
            }
        });
}

executeTestes();

// Função para criar um job de execução
const job = new CronJob('*/10 * * * * *', ()=> {
    
})

//job.start();