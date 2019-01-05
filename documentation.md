To implement the style transfer I took the follow steps/ used the following resources: 

[Resource/ idea board for this project](https://www.are.na/rebecca-uliasz/ml-proj)

1. First, I followed the ml5 documentation for training a style transfer model in tensorflow, found [here](https://github.com/ml5js/training-styletransfer)

I found I didn't have the processing power to do this (it would have taken days), so I followed [this](https://www.youtube.com/watch?v=gye9hSIrRWI) tutorial by Yining Shi in order to train a model using a virtual machine (Spell). This process took a few hours (first, to create the environment and dataset on Spell, next to train the dataset on an image to produce a style model). 

![image of spell](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell1.png)
![spell2](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell2.png)
![spell3](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell3.png)

The model is trained on the COCO2014 largescale dataset and VGG19 optimizer function. 

2. After training the model in Spell, I took the ckpt files that were generated for use in tensorflow.py and converted them to use in tensorflow.js using [this repository](https://github.com/reiinakano/fast-style-transfer-deeplearnjs)

![ckpt](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/ckpt.png)

3. The next step was to use this model in an p5.js sketch, which I did following the documentation on the ml5 website. All of the examples on the site use either webcam input or pre-loaded server-side files as input, so I needed to figure out how to apply the model to images that were scraped from the web. I created a test sketch to make sure the model was working properly, using webcam input 

![webcam transfer](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/vid-test1.png)
![2](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/vid-test2.png)

4. I configured the Bing API to directly query image search results from my sketch. I scraped the JSON in order to acquire the top 12 results for the search "nude" (safe search off). 

![puppies](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/bing-json.png)

5. Parsing the JSON is difficult, becuase of the way that p5.js renders p5.images. I thought I would have to write something to temp download images and refer to the local files, but I eventually got it to work by using the createImg() in a series of callback function. This doesn't work if CORS is enabled and security features are temporarily disabled. 

6. I first generated a lot of pixel distortion, but eventually figured out the model was looking for a very specific size and scale of input and reference images. 

images with distortion

![cats](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/render-errors.png)

![cats2](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/GPU-error2.png)

images correctly scaled and processed 

![nudes](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/nude.png)
![cats](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/cat2.png)




## next steps 


1. Implement it in client. Right now, I am getting several uncaught js errors that have to be resolved. [See here](http://www.rebeccauliasz.com/synthetic-sage/) 


![errors](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/client-errors.png) 




2. Implement similar idea with GAN. This will require more computational power than I have right now

