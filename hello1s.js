const log = require('./log');
let CronJob=require('cron').CronJob;
new CronJob('*/1 * * * *',function(){
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    log.info(datetime+'\tHello from 1');
},null,true,'America/Los_Angeles');
