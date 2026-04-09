---
id: airsim
listingTitle: Realtime Air Flow
title: Split AC Realtime Simulation
order: -1
---
Hello there! This page is a work in progress, so if you are here, I must have sent you a link. Here are some preliminary tests of our Air Flow Simulation.

The following is a video showing the only input data that the user would need to collect. We ran a test on a small bedroom:

![alt-text](/engineering/airsim/input.gif)

The next gif shows what our system outputs. It takes less than five minutes to complete and allows the user to draw cutouts for specific spots on the wall. The output is still a bit rough for visualization, however for simulation it is detailed enough. We plan to use the mesh to simulate and then overlay clean images from the video to clean up the render:

![alt-text](/engineering/airsim/output.gif)

And then finally here is a video of our air sim working on a mesh. We use a preexisting library that does position based dynamics, so we can easily simulate in real time many particles within a room on consumer grade hardware. Obviously, this simulation is rough as well, but conceptually we have proven capability. You can also see that the mesh includes a window. This is to show that we can also incorporate places for the air to escape. We do not need a watertight mesh.

![alt-text](/engineering/airsim/points.gif)

If you want to see the system in action in person, please just let me know.

# References:
* [3D Point Cloud Reconstruction with SLAM3R](https://arxiv.org/abs/2412.09401)
* [Air Flow Simulation with SPlisHSPlasH](https://splishsplash.physics-simulation.org/)
* [Mesh Cleanup with Open3D](https://www.open3d.org/)