---
layout: post
title:  "TurtleBot Follower"
date:   2015-02-04 10:00:07
answerrostag: "challenge_follower"
track: [challenge]
---

In this lesson we will launch TurtleBot follower demo. We will launch two
TurtleBots in Gazebo Concert, then you will drive the first TurtleBot and the
second will follow it.

## Prerequisites

1\. This lesson is a continuation of the previous lesson:
["Multiple TurtleBots in Concert"]({{ site.url }}{% post_url 2015-02-04-6 %}).
If you have not done instructions from `prerequisites` section, you should do
them firstly.

[comment]: <> (TODO: remove `make` instruction when launch file for simulation will be in deb package)

2\. We will use `tutlebot_follower` package.

2.1 Change directory.
{% highlight sh %}
cd ~/my_ws/src
{% endhighlight %}

2.2 Clone the `turtlebot_apps` repository.

[comment]: <> (TODO: replace link to the original repository)

{% highlight sh %}
git clone https://github.com/nampi/turtlebot_apps.git
{% endhighlight %}

***NOTE:*** We will use this repository until this
[pull request](https://github.com/turtlebot/turtlebot_apps/pull/142) will be
merged.

The original repository is https://github.com/turtlebot/turtlebot_apps.

2.3 Change directory.
{% highlight sh %}
cd turtlebot_apps
{% endhighlight %}

2.4 Change git branch.
{% highlight sh %}
git checkout simul
{% endhighlight %}

The opportunity to launch follower application in simulation was added in
`simul` branch.

3\. Build package.
{% highlight sh %}
source /opt/ros/indigo/setup.bash
cd ~/my_ws/
catkin_make
{% endhighlight %}

If you have an error then use `CATKIN_IGNORE` for all packages except
`turtlebot_follower` package.
{% highlight sh %}
touch /home/<your_name>/my_ws/src/turtlebot_apps/software/pano/pano_core/CATKIN_IGNORE
touch /home/<your_name>/my_ws/src/turtlebot_apps/software/pano/pano_ros/CATKIN_IGNORE
touch /home/<your_name>/my_ws/src/turtlebot_apps/software/pano/pano_py/CATKIN_IGNORE
{% endhighlight %}

If you run catkin_make, it will ignore any package in the directory with
`CATKIN_IGNORE` file.

## Launching Turtlebot Follower

TurtleBot named `gamza1` will be controlled using joystick, TurtleBot named
`gamza2` will follow `gamza1` in this example.

1\. Launch Gazebo Concert (steps 1-10 from the
  [previous lesson]({{ site.url }}{% post_url 2015-02-04-6 %})).

{% include image.html img="/assets/sim_gazebo_concert.png" title="Gazebo Concert" %}

2\. Select `gamza1` in the resource list and capture it.

{% include image.html img="/assets/sim_concert_capture.png" title="Capture gamza1" %}

[comment]: <> (TODO: remove `change the path` instruction when launch file for simulation will be in deb package)

3\. Open a new terminal and change the path.
{% highlight sh %}
source ~/my_ws/devel/setup.bash
{% endhighlight %}

4\. Launch turtlebot_follower demo.
{% highlight sh %}
roslaunch turtlebot_follower follower.launch simulation:=true __ns:=gamza2
{% endhighlight %}

***NOTE:*** *__ns is a substitute for ROS_NAMESPACE. You can find more
information on [wiki ros](http://wiki.ros.org/Remapping%20Arguments).*

5\. To initiate following, `gamza1` has to be in front of `gamza2`. Drive
`gamza1` using joystick to place it in front of `gamza2`. After `gamza2`
recognizes `gamza1`, `gamza2` tries to keep the center of the observed object
directly in front of itself and a fixed distance away.

{% include image.html img="/assets/sim_turtlebot_follower.png" title="TurtleBot Follower" %}

If `gamza1` is very close to `gamza2`, then `gamza2` will go backward away. If
distance between them is increasing then `gamza2` will go forward after `gamza1`
to reduce the distance.

You should move `gamza1` slowly. If you move `gamza1` too quickly, then `gamza2`
will lose it and stop.

***NOTE:*** *Other objects could confuse the follower. You should avoid them.*

6\. Interrupt the processes. Close the windows.

You can watch these steps in the video:

{% include youtube.html youtubeid="fNzDSSGmams" youtubetitle="TurtleBot Follower"%}

You can find more information about turtlebot_follower package on
[wiki ros](http://wiki.ros.org/turtlebot_follower).
