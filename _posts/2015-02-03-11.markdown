---
layout: post
title:  "Going to a Specific Location on Your Map Using Code"
date:   2015-02-03 10:00:11
answerrostag: "simulation_specific_location"
track: [simulation]
---

In this lesson we will learn how to send robot a command: "go to a specific
position at map".

{% include using_github_rep.md %}

## Launching Gazebo and Rviz

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Run the navigation demo.
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch
{% endhighlight %}

3\. Launch Rviz.
{% highlight sh %}
roslaunch turtlebot_rviz_launchers view_navigation.launch
{% endhighlight %}

4\. View the current rotation.

Run the command:
{% highlight sh %}
rosrun tf tf_echo /map /base_link
{% endhighlight %}

You will see the following output in the terminal:
{% include image.html img="/assets/sim_current_position.png" title="Current Position" %}

We are interested in four numbers in quaternion (current rotation). We will
send a goal to change position with approximately the same rotation. Note four
numbers: [0, 0, 0, 1].

5\. Choose a point.

Select `Publish point` and choose a point on map where you want TurtleBot to go
(do not click). You should note two numbers you see on the bottom left corner of
Rviz window. Look at the picture:

{% include image.html img="/assets/sim_publish_point.png" title="Choose a Point" %}

There are two numbers: [3.52, -1.7].

***NOTE:*** *The third number is altitude. It may show a number that is not
perfectly 0, but regardless of what it says, use 0.*

## Launching Script

1\. Change directory.
{% highlight sh %}
cd ~/helloworld/turtlebot
{% endhighlight %}

2\. Edit `go_to_specific_point_on_map.py`
{% highlight sh %}
emacs -nw go_to_specific_point_on_map.py
{% endhighlight %}

***NOTE:*** *You can use editor you prefer.*

3\. Modify line \#83.

Old values:
{% highlight sh %}
position = {'x': 1.22, 'y' : 2.56}
{% endhighlight %}

New values:
{% highlight sh %}
position = {'x': 3.52, 'y' : -1.7}
{% endhighlight %}

4\. Press `Ctrl+X`, then `Ctrl+S` to save the changes. After saving is
finished, you will see a message like this:
{% highlight sh %}
Wrote /home/<user_name>/helloworld/turtlebot/go_to_specific_point_on_map.py
{% endhighlight %}

5\. Press `Ctrl+X`, then `Ctrl+C` to exit Emacs.

6\. Launch script.
{% highlight sh %}
python go_to_specific_point_on_map.py
{% endhighlight %}

7\. See the results in Rviz.

TurtleBot will go to the specific point.

8\. Interrupt the processes. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="h_geDMC5poI" youtubetitle="Going to a Specific Location on Your Map Using Code"%}
