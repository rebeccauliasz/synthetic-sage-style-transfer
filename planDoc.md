Coding exam game plan

1.	Convolution and curation

I want to use this exam as a springboard into a larger research project on datasets. I am interested looking at datasets as generative archives that are curated based on social, economic, political etc factors through experimental use of said datasets in machine learning operations. I am specifically interested in Generative Adversarial Networks, or GANs, a type of neural network that uses two competing generative models in order to synthesize new “fake” images. This process uses noise, or random input in order to dynamically train a coupled generator model which in turn, feeds forward into a discriminator model, which decides whether an image is “real” or not. This process iterates in order to produce synthetic images that resemble the initial data that was fed into the GAN. In recent years, there have been a number of low level frameworks (pytorch, tensorflow, cycleGAN) that have been developed to implement GANs more easily in machine language. Common to these implementations is that they necessarily use a large scale database in order to compile the generator model for implementation in the GAN. Common large scale databases include MS-COCO, ImageNet, MobileNet, MNIST. It is also possible to create custom datasets which can then be compiled into models.

A similar machine learning image process called a style transfer uses a single model to map the “style” from one image onto another. Similarly, a large scale database must be organized and compiled in the appropriate format in order to create a model for the “styled” image to be generated.

In both types of techniques, GANs and style transfers, a large scale database is sampled processed according to different optimizer and loss function. The data is then fit to a certain function, and eventually used to predict future data. I have done a bit of digging around in tensorflow.js to begin to learn how the different optimizer and loss algorithms that are available through the framework can shape the fit of the model in different ways. In thing that interests me most about both of these techniques is the way in which they each use highly sophisticated frameworks based on a conglomeration of low level APIs, curated datasets, model training protocols, and optimization algorithms in order to calculate a “style” or database aesthetic. I think that looking at the output of style convolutional networks like GANs and style transfers has a lot of potential for critical analysis. They have been mainly used in rather trivial ways thus far, in order to create novel works of art, or map the style of one famous artwork onto other images. I propose that the images that come out of these networks be read as sort of structures of a style, or some sort of aesthetic imprint of an algorithm designed to represent the feeling of a current moment.

Thinking through the ways in which these images are in some way, little concretizations of a larger politics of representation (what is included and excluded in a database and why? Why are some large image databases used over and over again? How does an optimization algorithm sample from a set and why was it designed that way?)

 I am interested in extrapolating on one model that I see circulating in art-generation networks, the “nude”, which is based a dataset of images scraped from wikiart. This particular data set has been used in GANs to produce “nude art” based on a database composed of mostly white male modernist painters.


Image from GANGogh network (Jones and Bonafilia)

I wonder what it might be like to train models based on alternative datasets of “nudes”? What types of images might come out of models based on datasets composed of nude art made by female artists? What about commercial photographic representations of female nudes? Pornographic databases of female nudes? I speculate that each of these spaces has a defined politics of representation that would manifest in the output “style” of the model that they would comprise.

2.	Implementation

So far:
I have thus far experimented (but not successfully) in creating GANs from prefabricated databases in tensorflow with python. I have hit limitations with this approach as I have not yet been able to compile a database into a model due to hardware constraints. I’ve successfully began to train a style transfer model based on the COCO dataset and a pornographic photo taken from google. After about 20 hours training on my GPU I aborted the program.

Ideal:
In my ideal implementation I would be able to create datasets from image banks that I compile from various scraped sources (social media conent, commercial content, porn sites, etc) I would use these datasets in order to create training models (using tensorflow.js) that I would then use in GANs to generate new images. My ideal implementation would require the following steps:
1.	Make datasets and compile using tensorflow
2.	Train model on dataset
3.	Convert model for use in tensorflow.js
4.	Generate images using the trained model
5.	Make a web based interactive interface using ml5 and p5.js
The GAN model has not yet been implemented in ml5, a higher level framework designed by ITP that uses tensorflow.js in combination with p5.js. This is something to work towards in the future.

Practical:
I have been working with ml5 to see how I might begin to play with this idea using the ml5 and tensorflow.js frameworks to create custom style transfers. Using the COCO dataset, I am attempting to create custom models in order to apply style transfers to random images that I scrape from pornhub. I would then put this all together in a p5.js interface in order to create a generative sketch that would randomly generate stylized pornhub images. This will be more of a proof of concept/ coding exercise then a finalized project, with the goal of becoming acclimated to creating models from datasets and using them to generate content. A future goal would be to create the dataset that the model is generated from.

The workflow I envision for this is as follows :
1.	Use tensorflow and Spell to create models from COCO dataset using fast style transfer
a.	I will use tensorflow to create the style transfer model using the COCO image dataset and the George Petty SAGE pin-up painting- -the first piece of “computer art” made with a SAGE GUI in 1959.
b.	I will use a library to convert the generated tensorflow model into a tensorflow.js model
c.	Convert the model to ml5 in order to use in a sketch
2.	Create a ml5 and p5.js sketch that scrapes images from pornhub in order to generate stylized images
a.	Implement a framework or API call that allows me to get these images
3.	Create an html file and structure that serves as GUI and uses ml5 and p5.js
