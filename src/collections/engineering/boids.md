---
id: boids
listingTitle: Boids & Noise
title: Boids & Noise
---
![alt-text](../../img/engineering/boids/canadaScaled.jpg)
**The idea for this fun mess-around project was on a trip in Canada. While looking out at the lake I began to think about the birds flying above and their electronic look-alike [Boids.](https://www.youtube.com/watch?v=bqtqltqcQhw) I thought it would be fun to see if I could get realistic water behavior by adding a few more rules to the boid movement.**

The first thing I needed to do was get boids moving in Unity, which was pretty straight forward with the help of this great [write up.](https://vanhunteradams.com/Pico/Animal_Movement/Boids-algorithm.html)

From this point on I wanted to take the positions of all the boids and turn it into a texture to be displayed onto the background. To do this I would create a separate texture for each boid that would contain a float at each texel describing the distance from the boid. The screen distance was scaled using the largest possible distance: the diagonal distance from the top left corner to the bottom right. With each iteration of this shader the aggregate texture is updated with the current texel only replacing the existing one if the distance is lower.

Below is a picture of texture with one point, and a texture aggregated with multiple points.

![alt-text](../../img/engineering/boids/singleDistance.png)
![alt-text](../../img/engineering/boids/multipleDistance.png)

It was at this point that I realized the boids in this texture kind of looked like the surface of disturbed water. So I tried to lean into that aesthetic. I needed to transform this ugly aggregate distance texture into something with some color. To do this, I made a simple shader to look up a color based on the distance. After this I set up some simple logic for spawning and killing boids, and here is my first test of a splash.

![alt-text](../../img/engineering/boids/firstSplashSmall.gif)
*Splash...*

At this point the surface of the water was looking pretty plain when there wasn’t any disturbance so I wanted to add some constant noise to make a toony looking water. I wanted to use perlin noise. To get this started I ripped and modified some code from another [fantastic write up.](https://fancyfennec.medium.com/perlin-noise-and-untiy-compute-shaders-f00736a002a4)

Perlin noise operates by using a 2d array of randomly positioned vectors and smoothly interpolating between them. This works great for creating a still image, but the water needed some movement. I added a tweakable parameter called `turbulence` that would initialize a texture with a bunch of random values with a range of `2*turbulence.` Then at each frame, a compute shader would rotate each gradient in the list to add random and repeatable motion to the noise. Then I used the same lookup I did for the boid distance and got a water texture!


![alt-text](../../img/engineering/boids/perlinVectors.png)
![alt-text](../../img/engineering/boids/waterFirst.gif)

![alt-text](../../img/engineering/boids/cutoffEquation.png)
**Now I needed to mix the boid texture and the water texture together. To do this I created a drop off function. I used the same function for smoothly interpolating values and added a tweakable parameter for the steepness of the drop off. This polynomial function is awesome because its second derivative at y=1 will always be zero making it the perfect choice for smoothly transitioning between 0 and 1. However, because of the scale I added, the function would continue past x=1 so I added a cutoff for anything higher than y=1.**

![alt-text](../../img/engineering/boids/cutOffFunction.gif)

Using this drop off function I can now smoothly add the boids to the noise texture. Here’s the player's movable boat creating a wake. I also added some logic to translate the noise if the user is moving while touching a boundary. From here I added a player movable boat styled like a destroyer, a cannon ball for some flair, and a shader to pixelate everything and make it seem retro.

![alt-text](../../img/engineering/boids/thumb.gif)
![alt-text](../../img/engineering/boids/cannonBall.gif)

In hindsight I don’t think the boids are super necessary because their lifetimes are so short. I think I could produce a similar effect with just random velocity points. In the future I want to add some pirates that will come at the player that the player can destroy for points. Here’s a picture of me on an actual destroyer.

**![alt-text](../../img/engineering/boids/onABoatSmall.jpg)**
*Boom!*

# References:
* [Sebastian Lague Video](https://www.youtube.com/watch?v=bqtqltqcQhw)
* [Boid Algorithm Overview](https://vanhunteradams.com/Pico/Animal_Movement/Boids-algorithm.html)
* [Perlin Noise Compute Shader](https://fancyfennec.medium.com/perlin-noise-and-untiy-compute-shaders-f00736a002a4)
* [Perlin Noise Visualization](https://longwelwind.net/blog/perlin-noise)
