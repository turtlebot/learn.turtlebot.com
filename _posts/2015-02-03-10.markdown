---
layout: post
title:  "Going Forward and Avoiding Obstacles Using Code"
date:   2015-02-03 10:00:10
answerrostag: "simulation_avoid_obstacles"
track: [simulation]
---

We have learned how to launch and modify existing python script in
[this lesson]({{ site.url }}{% post_url 2015-02-03-7 %}). We have learned how
to send robot a command saying: "go forward until we send you a stop signal".
In this lesson we will learn more complicated command: "we want to end up at
the location three meters forward regardless of what path takes us there".

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

4\. Change the TurtleBot orientation.

[Send a navigation goal]({{ site.url }}{% post_url 2015-02-03-9 %}) to change
TurtleBot orientation. It has to be facing the long object.

5\. Change the TurtleBot position.

Send a navigation goal to stand TurtleBot in front of the object facing it.
For example, like this:

{% include image.html img="/assets/sim_send_goal.png" title="Send a Navigation Goal" %}

{% include image.html img="/assets/sim_pose_before_motion.png" title="Position of TurtleBot before Launching the Script" %}

## Launching Script

1\. Launch script.
{% highlight sh %}
python ~/helloworld/turtlebot/goforward_and_avoid_obstacle.py
{% endhighlight %}

2\. See the results in Rviz.

TurtleBot will find a path and stop on another side of object.

3\. Interrupt the processes. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="EAjnkilewok" youtubetitle="Going Forward and Avoiding Obstacles Using Code"%}

After finishing the instructions open file `goforward_and_avoid_obstacle.py`
and try to understand the meaning of the commands reading the comments.

***NOTE:*** *In the script `goforward_and_avoid_obstacle.py` there is also a
restriction on the time of task execution (lines 50-51):*

{% highlight sh %}
#allow TurtleBot up to 60 seconds to complete task
success = self.move_base.wait_for_result(rospy.Duration(60))
{% endhighlight %}
