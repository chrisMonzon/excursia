var url = 'https://mylogger.io/log';

function log(message) {
    //send http request
    console.log(message);
}

// module.exports.log = log;
// module.exports.endPoint = url;
module.exports = log;
