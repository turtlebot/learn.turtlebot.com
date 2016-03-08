---
layout: post
title:  "Writing Your First Script"
date:   2015-02-03 10:00:07
answerrostag: "simulation_first_script"
track: [simulation]
---

We can write a program and robot will do these instructions. In this lesson you
will learn how to launch, create and modify a script. We will launch python
script but it does not matter if you know this language or not.

Open a new terminal. Launch the empty world:
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch world_file:=/opt/ros/indigo/share/turtlebot_gazebo/worlds/empty.world
{% endhighlight %}

## Launching a Script

You should do these instructions step by step:

1\. Create a new directory.
{% highlight sh %}
mkdir ~/helloworld
{% endhighlight %}

2\. Change directory.
{% highlight sh %}
cd ~/helloworld/
{% endhighlight %}

3\. Download sources.
{% highlight sh %}
git clone https://github.com/markwsilliman/turtlebot/
{% endhighlight %}

***NOTE:*** *You need to have [Github account](https://github.com/) to do this step.*

4\. Change directory.
{% highlight sh %}
cd turtlebot
{% endhighlight %}

5\. Launch script.
{% highlight sh %}
python goforward.py
{% endhighlight %}

6\. The TurtleBot is going forward in Gazebo.

7\. Press `Ctrl+C` in the terminal to stop TurtleBot.

## Creating and Modifying a Script

Now you will modify the existing script. TurtleBot will revolve on its axis.

1\. Change directory.
{% highlight sh %}
cd ~/helloworld/turtlebot/
{% endhighlight %}

2\. Create a copy of `goforward.py`.
{% highlight sh %}
cp goforward.py goincircles.py
{% endhighlight %}

3\. Edit `goincircles.py`.
{% highlight sh %}
emacs -nw goincircles.py
{% endhighlight %}

***NOTE:*** *You can use editor which you prefer.*

4\. Modify `linear.x` from 0.2 to 0 and `angular.z` from 0 to 0.5.

***NOTE:*** *TurtleBot uses only `linear.x` and `angular.z` values because it
works in a planar (2D) world and it has a differential drive system which cannot
move laterally.*

5\. Press `Ctrl+X`, then `Ctrl+S` to save the changes. After saving is finished,
you will see a message like this:
`Wrote /home/<user_name>/helloworld/turtlebot/goincircles.py`.

6\. Press `Ctrl+X`, then `Ctrl+C` to exit Emacs.

7\. Launch script.
{% highlight sh %}
python goincircles.py
{% endhighlight %}

8\. TurtleBot is revolving on its axis.

9\. Press `Ctrl+C` in the terminal to stop TurtleBot.

## Launching another Script

1\. Change directory.
{% highlight sh %}
cd ~/helloworld/turtlebot/
{% endhighlight %}

2\. Launch script.
{% highlight sh %}
python draw_a_square.py
{% endhighlight %}

3\. TurtleBot is drawing a square.

4\. Press `Ctrl+C` in the terminal to stop TurtleBot.

You can watch these steps in this video:

{% include youtube.html youtubeid="_6DFndAzPPU" youtubetitle="Writing Your First Script "%}

Open files `goforward.py` and `draw_a_square.py` and try to understand the
meaning of the commands reading the comments.

You can learn more about Python in this [book](http://shop.oreilly.com/product/0636920028154.do)
or find basic online tutorial.
