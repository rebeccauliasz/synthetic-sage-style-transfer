//cant use requests on server (node only)
//let https = require('https');

//set up base URL for Bing Image API
var api ="https://api.cognitive.microsoft.com/bing/v7.0/images/search?"
var subscriptionKey = '&subscription-Key=d3197b9c35224b65994698997126488c';


//Bing API variables
var search = '&safesearch=off&q=nude';
var imageData;
let tempImg;
let imgArray = [];
let temp;

var w = (window.innerWidth)/3;
var h = (window.innerHeight)/4;
var index = 0;
var xPos = 0;
var yPos = 0;
var indexMax = 13;

//ml5 stuff
let style;
let resultImg;


//p5 stuff

//preload JSON, dont do anything yet
function preload() {
  loadData();
}

//submit image search to Bing API
function loadData(){
  var url = api + search + subscriptionKey;
  loadJSON(url, gotData);
}

//asynch load JSON file
function gotData(data) {
  imageData = data;

  for (var i=0; i < indexMax; i++){
      _url = imageData.value[i].contentUrl;
      imgArray.push(loadImage(_url));

  }
  //tempImg = image(loadImage(imageData.value[0].contentUrl));

  //console.log(imgArray);
}

//function LoadImages () {
//  this.createImg()
//}

//load images and store them in an array for processing, hide for later
//function loadImages(){

      //get temp input image
      //tempImg = image(loadImage(imageData.value[0].contentUrl));

      //tempImg.size(300, 200);
      //console.log(tempImg);


      //createImg(tempImg, 300, 200, 50, 50);
      //imgArray.push(tempImg);
      //imgArray[i] = this.tempImg;
      //tempImg.hide();}



//counter to display image grid
function displayImages(){
  if (index < 12){
      xPos = (index % 3) * w;
      yPos = (index % 4) * h;
      index++;
      console.log(index);
    } else {
      index = 0;
    };

    /*temp = imgArray[i];
    console.log(temp);
    image(temp, 50, 50, 50, 50);*/
    //console.log(load);
    //tempImg.show();
}

//p5.js post load
function setup() {
  //noCanvas();
  createCanvas(1200, 800).parent('canvasContainer');
  console.log(imgArray);

  /*dont need anymore, this is in preload
  var button = select('#generate');
  button.mousePressed(loadData);

  dont need this at all, its called in the preload function
  var button2 = select('#loadImg');
  //button2.mousePressed(loadImages);*/

  var button3 = select('#display');
  button3.mousePressed(displayImages);

  var transferBtn = select('#transferBtn');
  transferBtn.mousePressed(transferImages);

  //create style method
  style = ml5.styleTransfer('styleTransfer_spell/models/sage', modelLoaded);

}

function draw() {
  //
  //background(0);
  image(imgArray[index], xPos, yPos, w, h);
  //imgArray[0].display();

}

//ml5 stuff
// A function to call when the model has been loaded.
function modelLoaded() {
  if (style.ready){
    select('#status').html('Model Loaded');
    //style.transfer(gotResult);
  }
}


function transferImages(){
  var press = true;
  console.log('press');
  select('#status').html('applying style transfer');

  style.transfer(tempImg, function(err, result){
    createImg(result.src).parent('style');
  });

  select('#status').html('done');
}
/*
// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  style.transfer(gotResult);
}*/
