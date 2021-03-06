# SAGE pin-up 

![](https://cdn.theatlantic.com/static/mt/assets/science/assets_c/2013/01/sage_pinup-thumb-615x500-111521.jpg)

  In 1956, the first ever human likeness appeared on the interface of an IBM SAGE (Semi-Automatic Ground Environment) in the form of an anonymously created pin up girl. The SAGE project, a collaborative initiative of the US Air Force and engineers at IBM and MIT, was an massive scale defense project that consisted of massive AN/FSQ-7, each half an acre large, directed towards real time flight monitoring and detection of nuclear threat via cathode displays. The pin-up, based on a drawing by Esquire artist George Petty, was anonymously programmed into the system using Hollerith punch cards. Explains Lawrence Tipton in an interview with [The Atlantic](https://www.theatlantic.com/technology/archive/2013/01/the-never-before-told-story-of-the-worlds-first-computer-art-its-a-sexy-dame/267439/): 
  

"According to Tipton, the program that displayed the pin-up image was a diagnostic that tested data flow between the two SAGE computers on site (referred to as the A and B computers). At the end of every shift, as one computer was about to go offline and switch over to the other, the active machine would begin transferring flight and intercept data to the standby machine so there could be a seamless switch over.

Two switching consoles on site were used to handle this process. After running the diagnostic, Tipton describes, if the pin-up displayed correctly on the screen, then data was being transferred between the A and B computers correctly. If the image displayed improperly, then the technicians immediately knew there was a problem.

When loaded, the pin-up image would be visible in flashing pulses that synchronized system-wide with the incoming flow of real-time radar data. A long exposure on Tipton's Polaroid camera would have assured the steady image of the pin-up you see here. (The pin-up lady has a spot on her thigh because that is the center of the circular display, which is where the electron gun in the CRT naturally aims when it is idle.)" 

![](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/images/sage_petty.jpg)

  The SAGE pin up is an interesting case in point for the entwined histories of gender and computer programming, a field that historically and to this day has been dominated by white men. There is, of course, a historical lineage of the female nude that can be traced through the cannon of Western modern art, but there is another history of gender that can be traced through the development of the digital image. This history is notably punctured with a number of "firsts" marked by the female body, including but not limited to the SAGE pinup and the first ever google image search, the iconic photo of J Lo's 2000 Grammy Award dress...

# Synthetic SAGE project

  I am interested looking at datasets as generative archives that are curated based on social, economic, political etc factors through experimental use of said datasets in machine learning operations. I am specifically interested in Generative Adversarial Networks, or GANs, a type of neural network that uses two competing generative models in order to synthesize new “fake” images. This process uses noise, or random input in order to dynamically train a coupled generator model which in turn, feeds forward into a discriminator model, which decides whether an image is “real” or not. This process iterates in order to produce synthetic images that resemble the initial data that was fed into the GAN. In recent years, there have been a number of low level frameworks (pytorch, tensorflow, cycleGAN) that have been developed to implement GANs more easily in machine language. Common to these implementations is that they necessarily use a large scale database in order to compile the generator model for implementation in the GAN. Common large scale databases include MS-COCO, ImageNet, MobileNet, MNIST. It is also possible to create custom datasets which can then be compiled into models.

  A similar machine learning image process called a style transfer uses a single model to map the “style” from one image onto another. Similarly, a large scale database must be organized and compiled in the appropriate format in order to create a model for the “styled” image to be generated.

  In both types of techniques, GANs and style transfers, a large scale database is sampled processed according to different optimizer and loss function. The data is then fit to a certain function, and eventually used to predict future data. I have done a bit of digging around in tensorflow.js to begin to learn how the different optimizer and loss algorithms that are available through the framework can shape the fit of the model in different ways. In thing that interests me most about both of these techniques is the way in which they each use highly sophisticated frameworks based on a conglomeration of low level APIs, curated datasets, model training protocols, and optimization algorithms in order to calculate a “style” or database aesthetic. I think that looking at the output of style convolutional networks like GANs and style transfers has a lot of potential for critical analysis. They have been mainly used in rather trivial ways thus far, in order to create novel works of art, or map the style of one famous artwork onto other images. I propose that the images that come out of these networks be read as sort of structures of a style, or some sort of aesthetic imprint of an algorithm designed to represent the feeling of a current moment.

  Thinking through the ways in which these images are in some way, little concretizations of a larger politics of representation (what is included and excluded in a database and why? Why are some large image databases used over and over again? How does an optimization algorithm sample from a set and why was it designed that way?)

  I am interested in extrapolating on one model that I see circulating in art-generation networks, the “nude”, which is based a dataset of images scraped from wikiart. This particular data set has been used in GANs to produce “nude art” based on a database composed of mostly white male modernist painters.

  I wonder what it might be like to train models based on alternative datasets of “nudes”? What types of images might come out of models based on datasets composed of nude art made by female artists? What about commercial photographic representations of female nudes? Pornographic databases of female nudes? I speculate that each of these spaces has a defined politics of representation that would manifest in the output “style” of the model that they would comprise.
  
  For this instantiation, I trained a GAN to process images in the style derived from the Petty-SAGE pin up. I created a site to scrape pornographic nudes from Google based on a key term search, which I then processed through the GAN to rerender in real time. The site is no longer functioning, but here is some documentation: 
  
  ### Website
  ![](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/Screen%20Shot%202020-03-19%20at%202.53.36%20PM.png)
  ### Output Images
  ![output images](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/nude.png)
  ![](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/synthsage1.gif)
  ![](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/synthsage2.gif)
  ![](https://github.com/rebeccauliasz/synthetic-sage-style-transfer/blob/master/doc/synthsage3.gif)
  
