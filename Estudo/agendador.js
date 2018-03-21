const  CronJob = require('cron').CronJob
var testeRun = require('./runTeste');
var sikulix = require('./restSikulix');

var hosts = [];
var tst = [];
var path = "";
var portRS = 50001;
var n = 0

function executeTestes(){
    testeRun.verifTest()
        .then(function (rows){
            if (rows.length > 0){
                tst = rows;
                //console.log(tst);
                return testeRun.veriHost();   
            } else {
                console.log('Sem Teste');
            }
        }).then(function(hrows){
            if (hrows.length > 0){
                hosts = hrows;
                //console.log(hosts);

            }else {
                console.log('Sem hots');
            }
        }).then(function(){       
            for(var i = 0; i < hosts.length; i++){
                sikulix.configServerPython(hosts[i].ip, portRS, '/startp');
                sikulix.executeTeste(hosts[i].ip, portRS, tst[i].modulo, tst[i].tst);
            }
        });
}

executeTestes();

const job = new CronJob('*/10 * * * * *', ()=> {
    
})

//job.start();