let https = require('https');

let subscriptionKey = 'd3197b9c35224b65994698997126488c';
let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search';
let term = 'tropical ocean';

let request_params = {
    method : 'GET',
    hostname : host,
    path : path + '?q=' + encodeURIComponent(search),
    headers : {
    'Ocp-Apim-Subscription-Key' : subscriptionKey,
    }
};

let req = https.request(request_params, response_handler);
req.end();

let response_handler = function (response) {
    let body = '';
};

response.on('data', function (d) {
    body += d;
});

response.on('end', function () {
    let firstImageResult = imageResults.value[0];
    console.log(`Image result count: ${imageResults.value.length}`);
    console.log(`First image thumbnail url: ${firstImageResult.thumbnailUrl}`);
    console.log(`First image web search url: ${firstImageResult.webSearchUrl}`);
 });
