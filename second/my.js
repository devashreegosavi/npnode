let logger = require('../node_modules/logger').createLogger(); // logs to STDOUT
let request = require('request');
request.get('http://www.codekul.com',  (error, response, body)=> {
    logger.info('error:', error); // Print the error if one occurred
    logger.info('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    logger.info('body:', body); // Print the HTML for the Google homepage.
});
logger.info('loading an array', [1,2,3], 'now!');