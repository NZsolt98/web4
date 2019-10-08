const winston=require('winston');

const logger=winston.createLogger({
    level:'info',
    format:winston.format.json(),

    transports:[
        new winston.transports.File({filename:'app.log',level:'info'}),
        new winston.transports.Console({filename:'app.log',level:'info'})
    ]
});

logger.log({
    level:'info',
    message:'NEEEEEEEEEEEEEEEEM!'
});