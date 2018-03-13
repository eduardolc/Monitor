const  CronJob = require('cron').CronJob

var n = 0
const job = new CronJob('*/5 * * * * *', ()=> {
    console.log('Vefiricando Teste',  n++ )
})

job.start()