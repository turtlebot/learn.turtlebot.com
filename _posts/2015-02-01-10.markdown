---
layout: post
title:  "Writing Your First Script"
date:   2015-02-01 13:46:14
answerrostag: "first_script"
track: [main]
---

Let’s write our first script to get a feel for writing scripts for ROS. If you don’t understand what every line means, don’t worry- we’ll get there! Our example is designed to be as simple as possible.

Close all terminal windows on TurtleBot. Open a new one and run:

{% highlight sh %}
roslaunch turtlebot_bringup minimal.launch
{% endhighlight %}

Now moving to the workstation, let’s clone the [github repository](https://github.com/markwsilliman/turtlebot/) for these articles and run a sample script:

{% highlight sh %}
mkdir ~/helloworld
cd ~/helloworld/
git clone https://github.com/markwsilliman/turtlebot/
cd turtlebot
python goforward.py
{% endhighlight %}

TurtleBot should be moving forward now. Press CTRL + C to stop it.

{% include youtube.html youtubeid="nzBSbr3r7ow" youtubetitle="First Python Script goforward.py"%}

Now let’s have a look at the code. Open it by running:

{% highlight sh %}
gedit goforward.py
{% endhighlight %}

You can also [view it on GitHub](https://github.com/markwsilliman/turtlebot/blob/master/goforward.py) if you prefer.

If you scroll all the way to the bottom you’ll see:


{% highlight python %}
if __name__ ==  '__main__':
    try:
        GoForward()
{% endhighlight %}

***NOTE:** If you haven’t looked at Python code before, [Learning Python by Mark Lutz](http://shop.oreilly.com/product/0636920028154.do) is a good resource.*

The code above simply means “when we start this script try running GoForward's __init__ (initialize) function”. From here the documentation in the code is pretty straightforward but not designed to be all-inclusive. To fully understand the publisher, etc., we’ve linked to [some great books]({{ site.url }}{% post_url 2015-02-10-99 %}).

For fun let’s modify the command so TurleBot goes in circles. In a terminal window run:

{% highlight sh %}
cd ~/helloworld/
cp goforward.py goincircles.py
gedit goincircles.py
{% endhighlight %}

Modify **linear.x = 0.2** to **0** and **angular.z = 0** to **0.5**. Save and exit.

In a new terminal window run:

{% highlight sh %}
python goincircles.py
{% endhighlight %}

***NOTE:** TurtleBot only uses linear.x and angular.z values because it works in a planar (2D) world, but for drones, marine robots and other robots that occupy 3D environments, linear.y, angular.x and angular.y values are available.*

## Accuracy

Now let’s try another script which is designed for TurtleBot to draw squares. In a terminal window run:

{% highlight sh %}
cd ~/helloworld
python draw_a_square.py
{% endhighlight %}

TurtleBot starts drawing squares on the floor but you’ll see that it quickly starts to drift away from its starting path. This is where robots and computers act very differently. If you ask a computer to do 1 + 1 you’ll always receive 2. If you ask a robot to move forward 1 meter it will go roughly a meter and not perfectly straight. Knowing where the robot is (localization) is one of the classic robotic challenges, especially in indoor environments where GPS isn’t reliable or accurate enough.

You might think that because you can tell the robot to go forward at 0.2 m/s, it would be easy to program a robot so that it goes forward one meter by publishing a **linear.x = 0.2 m/s** for 5 seconds. If the robot were a computer this is exactly right, but for robots this is very inaccurate due to slippage, imperfect calibration, and other factors. If you write a script like this to drive in a square and run for 10 cycles, you’ll end up somewhere entirely different from where you started! Luckily, amazing scientists and researchers are way ahead of us on this.

In the next article we will start to introduce solutions to these complex but fascinating challenges as we begin to leverage some of the really powerful tools ROS provides us.
