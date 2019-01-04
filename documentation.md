To implement the style transfer I took the follow steps/ used the following resources: 

1. First, I followed the ml5 documentation for training a style transfer model in tensorflow, found [here](https://github.com/ml5js/training-styletransfer)

I found I didn't have the processing power to do this (it would have taken days), so I followed [this](https://www.youtube.com/watch?v=gye9hSIrRWI) tutorial by Yining Shi in order to train a model using a virtual machine (Spell). This process took a few hours (first, to create the environment and dataset on Spell, next to train the dataset on an image to produce a style model). 
![image of spell](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell1.png)
![spell2](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell2.png)
![spell3](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/spell3.png)!

2. After training the model in Spell, I took the ckpt files that were generated for use in tensorflow.py and converted them to use in tensorflow.js using [this repository](https://github.com/reiinakano/fast-style-transfer-deeplearnjs)
![ckpt](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/ckpt.png)

3. 
