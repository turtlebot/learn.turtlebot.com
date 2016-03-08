---
layout: post
title:  "Autonomous Navigation"
date:   2015-02-03 10:00:09
answerrostag: "simulation_autonomous"
track: [simulation]
---

This lesson shows how to use the TurtleBot with a known map. In this lesson
we will run playground world with the default map, but also there are instructions
which will help you to run your own world.

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

If you want to launch your own world run this command.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=<full path to the world file>
{% endhighlight %}

2\. Run the navigation demo.
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch
{% endhighlight %}

If you have launched your own world or you want to use the map which you created in
the previous lesson, specify a map file.
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch map_file:=<full path to map yaml file>
{% endhighlight %}

3\. Launch Rviz.
{% highlight sh %}
roslaunch turtlebot_rviz_launchers view_navigation.launch
{% endhighlight %}

You can see this picture.

{% include image.html img="/assets/sim_default_map.png" title="Default Map of the Playground World" %}

Location of the TurtleBot on the map is already known. You will see a collection
of arrows which show the position of the Turtlebot.

4\. Send a navigation goal. Click the `2D Nav Goal` button.

5\. Click on the map where you want the TurtleBot to drive and drag in the
direction the Turtlebot should be pointing at the end.

***NOTE:*** *If the path or goal is blocked it can fail.*

***NOTE:*** *If you want to stop the TurtleBot before it reaches it's goal, send
it a goal at it's current location.*

6\. Interrupt processes and close the terminals.

You can see all these steps in the video:

{% include youtube.html youtubeid="vNo8w6W1AvY" youtubetitle="Autonomous Navigation"%}
