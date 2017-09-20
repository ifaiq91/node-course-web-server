const fs = require('fs');

var log = (data) => {
    var timestamp = new Date().toString();
    var logData = `${timestamp} - ${data}\n`;

    fs.appendFile(getLogFileName(), logData, (err) => {
        if (err) {
            console.log(err)
        }
    });

    console.log(logData);
};

var getLogFileName = () => {
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();

    return './logs/'+ (year + '-' + month + '-' + day + '-' + 'log' + '.log');
};

module.exports = {log};