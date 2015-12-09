---
layout: post
title:  "Creating a Map"
date:   2015-02-03 10:00:08
answerrostag: "simulation_creat_map"
track: [simulation]
---

This lesson shows how to build a map which lets the robot remembers the
environment. TurtleBot can autonomously navigate around using the map.

## Creating a Map

1\. Create a folder for maps.
{% highlight sh %}
mkdir ~/turtlebot_custom_maps
{% endhighlight %}

2\. Launch Gazebo world.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

3\. Start map building.
{% highlight sh %}
roslaunch turtlebot_gazebo gmapping_demo.launch
{% endhighlight %}

4\. Use Rviz to visualize the map building process.
{% highlight sh %}
roslaunch turtlebot_rviz_launchers view_navigation.launch
{% endhighlight %}

5\. Change the option.

`Local map`->`Costmap`->`Topic` (choose `/map` from drop-down list). See on the
picture:

{% include image.html img="/assets/sim_local_map_topic.png" title="Change the Option" %}

6\. Change the option.

`Global map`->`Costmap`->`Topic` (choose `/map` from drop-down list).

7\. Launch teleop.
{% highlight sh %}
roslaunch turtlebot_teleop keyboard_teleop.launch
{% endhighlight %}

***NOTE:*** *If you want you can use other tools, for example interactive
markers, find the information [here]({{ site.url }}{% post_url 2015-02-03-5 %}).*

8\. Drive the TurtleBot around.

***NOTE:*** *The terminal with teleop launching has to be active all the time
otherwise you won’t be able to operate the TurtleBot.*

This is a picture of 360-degrees turn:

{% include image.html img="/assets/sim_creating_map.png" title="360-degrees Turn" %}

9\. Save a map when your picture is good enough (like this).
{% include image.html img="/assets/sim_map.png" title="Map" %}
{% highlight sh %}
rosrun map_server map_saver -f /home/<user_name>/turtlebot_custom_maps/tutorial
{% endhighlight %}

10\. Interrupt processes and close the terminals.

You can see all these steps in the video:

{% include youtube.html youtubeid="RLzXfMLPs8A" youtubetitle="Creating a Map"%}

## Testing the New Map

We can test the result of our work.

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Launch navigation demo.
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch map_file:=/home/<user_name>/turtlebot_custom_maps/tutorial.yaml
{% endhighlight %}

You can launch the default map for playground world if you have not your own map.
Run this command:
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch
{% endhighlight %}

3\. Launch Rviz.
{% highlight sh %}
roslaunch turtlebot_rviz_launchers view_navigation.launch
{% endhighlight %}

4\. If you see a picture like this then creating the map has been realized
successfully.

{% include image.html img="/assets/sim_test_map_rviz.png" title="Testing the Map" %}

***NOTE:*** *We will explain you the meaning of new elements in the next tutorial.*

5\. Interrupt processes and close the terminals.

You can see all these steps in the video:

{% include youtube.html youtubeid="6H998ykS_RE" youtubetitle="Testing the New Map"%}

We have just checked that everything works good. We will learn how to use the
map for autonomous navigation in the next lesson.
