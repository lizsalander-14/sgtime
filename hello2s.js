let CronJob=require('cron').CronJob;
new CronJob('*/2 * * * *',function(){
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    console.log(datetime+'\tHello from 2');
},null,true,'America/Los_Angeles');