---
layout: post
title:  "Testing the TurtleBot Simulation"
date:   2015-02-03 10:00:03
answerrostag: "simulation_testing"
track: [simulation]
---

We assume that you have already done the [installation step]({{ site.url }}{% post_url 2015-02-03-2 %}).

## Running Gazebo with a TurtleBot

Open a terminal and enter the following command:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

***NOTE:*** *When you launch Gazebo for the first time it may take a few minutes
to update its model database.*

You would see an environment, called a Gazebo world, with TurtleBot and some
other objects. The scene is the main part of the simulator where objects are
animated and you are able to interact with the environment.

{% include image.html img="/assets/sim_first_gazebo_launching.png" title="Gazebo Simulator" %}

We highly recommend using a mouse with a scroll wheel. You can see the basic
mouse operations for navigating in the scene and changing the view angle below:

{% include image.html img="/assets/sim_gazebo_mouse.png" title="Basic Mouse Operations" %}

You can watch how it works in this video:

{% include youtube.html youtubeid="RdkgYYupGbM" youtubetitle="First Gazebo Launching"%}

***NOTE:*** *Closing Gazebo from the Graphical User Interface (GUI) will not kill
the additional processes spawned with roslaunch. If you need to finish work with
Gazebo, press `Ctrl+C` in the same terminal window.*

## Running Rviz

Rviz is a 3D visualization environment for the ROS. Rviz lets us see what the
robot is seeing, thinking and doing. Visualizing and logging sensor information
is an important part in developing and debugging.

While Gazebo is running, launch Rviz in a new terminal:
{% highlight sh %}
roslaunch turtlebot_rviz_launchers view_robot.launch
{% endhighlight %}

You would see a TurtleBot:

{% include image.html img="/assets/sim_first_rviz_launching.png" title="Rviz" %}

You can see on the picture how to navigate using a wheeled mouse.

Follow the steps below to see what the robot sees:

1\. Rotate the camera until you can the TurtleBot from behind.

2\. Enable `DepthCloud` option from left-bar and you will see TurtleBot’s depth
vision.

3\. Enable `Image` option from left-bar.

***NOTE:*** *You will probably have a warning on this step. The problem is that
the default topic for image is not supported by simulation. You can see an
image with warning below. Go to the next step to choose appropriate topic.*

{% include image.html img="/assets/sim_rviz_no_image.png" title="No image" %}

4\. You need to change `Image->Image Topic` option (choose it from drop-down list)
to show different images depending on which topic you use.

{% include image.html img="/assets/sim_rviz_depth_vision.png" title="Depth Vision" %}

You can watch these steps in this video:

{% include youtube.html youtubeid="8Qtp8Snnyo4" youtubetitle="First Rviz Launching"%}

***NOTE:*** *To save the configuration as the default, click `File->Save Config`.
When you run Rviz next time, it will load this configuration.*

You can find additional information about Gazebo GUI in
[Gazebo tutorial](http://gazebosim.org/tutorials?cat=guided_b&tut=guided_b2).
You can also find the documentation for Rviz on [ROS wiki](http://wiki.ros.org/rviz).
In addition, you can ask your questions or find a solution for similar problem on
[ROS Answers](http://answers.ros.org/questions/).
