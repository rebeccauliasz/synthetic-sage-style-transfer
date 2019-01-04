//cant use requests on server (node only)
//let https = require('https');

//set up base URL for Bing Image API
var api ="https://api.cognitive.microsoft.com/bing/v7.0/images/search?"
var subscriptionKey = '&subscription-Key=d3197b9c35224b65994698997126488c';
//let host = 'api.cognitive.microsoft.com';
//let path = '/bing/v7.0/images/search';

var search = '&safesearch=off&q=nude';
var images;
//let tempImg;
let imgArray = [];
let img = [];

var w = (window.innerWidth);
var h = (window.innerHeight);
var index = 0;
var xPos = 0;
var yPos = 0;
var indexMax = 12;

//ml5 stuff
let style;
let resultImg = [];

//p5.js stuff
//asynch load JSON file
function preload() {
  var url = api + search + subscriptionKey;
  loadJSON(url, gotData);
}

function gotData(data) {
  images = data;
  loadImages();
}

//load images and store them in an array for processing, hide for later
function loadImages(){

  for (var i=0; i<indexMax; i++){
    img[i] = createImg(images.value[i].contentUrl);
    img[i].size(480, 480);
    img[i].hide();
  };

  //try loading a local image for testing
  //  img[8] = createImg('styleTransfer_spell/images/fuchun.jpg');
  //  img[8].size(640, 480);

}

function setup() {
  noCanvas();
  //createCanvas(1200, 800)

  // The results images from the style transfer, set up container images
  for (var i=0; i < indexMax; i++){
      resultImg[i] = createImg('').parent('img'+ i);
      resultImg[i].size(320, 320);
      //resultImg[i].hide;
    };

//  _url = images.value[3].contentUrl;
//  resultImg[4] = createImg(_url).parent('img4');

  //display preprocessed imgs
  var button3 = select('#display');
  button3.mousePressed(displayImages);

  //reset
  var resetBtn = select('#resetBtn')
  resetBtn.mousePressed(resetImages);

  //apply model once loaded
  var transferBtn = select('#transferBtn');
  transferBtn.mousePressed(transferImages);

  //load model
  style = ml5.styleTransfer('models/sage', modelLoaded);
}

//reset (really just page refresh)
function resetImages(){
  location.reload();

}

//to display unprocessed imgs
function displayImages(){
  for (var i=0; i < indexMax; i++){
    img[i].show();
  }
}


//ml5 stuff

// A function to call when the model has been loaded.
function modelLoaded() {
  if (style.ready){
    select('#status').html('Model Loaded');
    //style.transfer(gotResult);
  }
}

// Apply the transfer to images
function transferImages() {
  select('#status').html('applying style transfer');

  select('.results').html
  var results = document.getElementById("canvasContainer");
  results.style.display='block';

  style.transfer(img[0], function(err, img) {
    resultImg[0].attribute('src', img.src);
    //resultImg[1].show();
  });
  style.transfer(img[1], function(err, img) {
    resultImg[1].attribute('src', img.src);
  //  resultImg[2].show();
  });
  style.transfer(img[2], function(err, img) {
    resultImg[2].attribute('src', img.src);
    //resultImg[3].show();
  });
  style.transfer(img[3], function(err, img) {
    resultImg[3].attribute('src', img.src);
  //  resultImg[4].show();
  });
  style.transfer(img[4], function(err, img) {
    resultImg[4].attribute('src', img.src);
  //  resultImg[4].show();
  });
  style.transfer(img[5], function(err, img) {
    resultImg[5].attribute('src', img.src);
  //  resultImg[4].show();
  });
  style.transfer(img[6], function(err, img) {
    resultImg[6].attribute('src', img.src);
  //  resultImg[4].show();
  });
  style.transfer(img[7], function(err, img) {
    resultImg[7].attribute('src', img.src);
  //  resultImg[4].show();
  });
  style.transfer(img[8], function(err, img) {
    resultImg[8].attribute('src', img.src);
  //  resultImg[4].show();
});
  style.transfer(img[9], function(err, img) {
    resultImg[9].attribute('src', img.src);
  //  resultImg[4].show();
});
  style.transfer(img[10], function(err, img) {
    resultImg[10].attribute('src', img.src);
//  resultImg[4].show();
});
  style.transfer(img[11], function(err, img) {
    resultImg[11].attribute('src', img.src);
//  resultImg[4].show();
});
  select('#status').html('porn generated');
}
