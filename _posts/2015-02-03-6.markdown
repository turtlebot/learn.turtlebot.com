---
layout: post
title:  "Editing the Simulated World"
date:   2015-02-03 10:00:06
answerrostag: "simulation_editing_world"
track: [simulation]
---

In previous lessons we encountered with the simulated world. We understood how
to move in it, change the camera view. In this lesson we will learn how to choose
a world for simulation, create a new world, edit the existing world.

## Specifying World for Simulation

We use following command to run the Gazebo world:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

`roslaunch` is an important tool that manages the start and stop of ROS processes.
Many ROS packages come with launch files, which you can run with:
{% highlight sh %}
roslaunch <package-name> <launch-filename> [args]
{% endhighlight %}

In this command:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

`turtlebot_gazebo` is a package name and `turtle_world.launch` is a launch file.
We can specify which world we want to use with argument `world_file`:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=<full path to the world file>
{% endhighlight %}

You can find existing world files in this folder `/opt/ros/indigo/share/turtlebot_gazebo/worlds`.
Try to run `corridor.world`:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=/opt/ros/indigo/share/turtlebot_gazebo/worlds/corridor.world
{% endhighlight %}

You will see this world:
{% include image.html img="/assets/sim_corridor_world.png" title="Corridor World" %}

The default world is in the environment variable `TURTLEBOT_GAZEBO_WORLD_FILE`.
You can see it running this command:
{% highlight sh %}
echo $TURTLEBOT_GAZEBO_WORLD_FILE
# Output:
/opt/ros/indigo/share/turtlebot_gazebo/worlds/playground.world
{% endhighlight %}

You can update it:

1\. For current terminal run this command:
{% highlight sh %}
TURTLEBOT_GAZEBO_WORLD_FILE=<full path to the world file>
{% endhighlight %}

2\. For all new terminals run this command:
{% highlight sh %}
echo "export TURTLEBOT_GAZEBO_WORLD_FILE=<full path to the world file>" >> .bashrc
{% endhighlight %}

It will work after relaunching the terminals.

## Launching an Empty World

1\. Create a folder for new worlds:
{% highlight sh %}
mkdir ~/turtlebot_custom_gazebo_worlds
{% endhighlight %}

2\. Launch an empty world:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=/opt/ros/indigo/share/turtlebot_gazebo/worlds/empty.world
{% endhighlight %}

3\. You will see:

{% include image.html img="/assets/sim_empty_world.png" title="Empty World" %}

## Editing a World

You can add simple shapes objects and objects from model database.

1\. Select the `Insert` tab.

{% include image.html img="/assets/sim_connect_to_database.png" title="Connecting to Model Database" %}

***NOTE:*** *You can see `Connecting to model database`. It might take a long
time to connect to Gazebo's model database.*

You will see this picture after connecting:

{% include image.html img="/assets/sim_add_model.png" title="Adding models" %}

2\. Add a box.

Select the box icon, then move your mouse onto the render window. Left click
when you choose the proper position of the box.

3\. Add a sphere and a cylinder.

4\. Add a bookshelf.

Select the `Insert` tab to access the model database. Select the bookshelf. Add
it to the render window.

***NOTE:*** *It might take some time to download a model from Gazebo's model
database.*

5\. Add a cafe table and a dumpster.

You should have something similar to this picture:

{% include image.html img="/assets/sim_new_world.png" title="Modification Tools" %}

You can see on the picture how to modify the pose of each model.

6\. Model may be deleted by right-clicking on a model and selecting `Delete`.
Delete the dumpster.

{% include image.html img="/assets/sim_delete_model.png" title="Delete the Object" %}

## Saving a New World

Select the `File` menu and choose `Save World As`.

{% include image.html img="/assets/sim_save_world.png" title="Delete the Object" %}

A pop-up will appear asking you to choose a folder and enter a new filename.
Choose `turtlebot_custom_gazebo_worlds` folder and type `tutorial.world`, then
click `Save`.

In terminal press `Ctrl+C`. Now you can launch your world:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=/home/<user_name>/turtlebot_custom_gazebo_worlds/tutorial.world
{% endhighlight %}

You can watch these steps in this video:

{% include youtube.html youtubeid="XqzBAjRPX-0" youtubetitle="Creating a New World"%}

In the next lessons we will use this command:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

with the default world `/opt/ros/indigo/share/turtlebot_gazebo/worlds/playground.world`.
Or we will specify the world file in the command:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=<full path to the world file>
{% endhighlight %}

## What to Read

You can find clear and full tutorial about editing the Gazebo world
[here](http://gazebosim.org/tutorials?tut=build_world&cat=build_world). You can
read more about `roslaunch` [here](http://wiki.ros.org/roslaunch).
