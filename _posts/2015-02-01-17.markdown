---
layout: post
title:  "Button Events"
date:   2015-02-01 13:46:19
answerrostag: "button_events"
track: [main]
---

To state the obvious, it would be pretty unsuccessful for TurtleBot to deliver the Keurig to someone and then have it start driving off while the original person is still brewing coffee.

To fix this, we’ll make sure TurtleBot waits for the original person to tell it that they are finished before it can drive away. Luckily the Kobuki base comes with three programmable buttons: B0,B1 and B2.


{% include image.html img="/assets/imag1020.jpg" title="B0 Button" %}

We’ll use B0 as the “TurtleBot, I’m finished making coffee… do what you will” button. This leads us to the next challenge: How do we monitor when the buttons are pressed?

## Monitoring Button Events

On TurtleBot open a terminal and run:

{% highlight sh %}
roslaunch turtlebot_bringup minimal.launch
{% endhighlight %}

On the workstation run:

{% highlight sh %}
cd ~/helloworld
python kobuki_buttons.py
{% endhighlight %}

Now try pressing B0.

{% include youtube.html youtubeid="t7xCanbk5VI" youtubetitle="Kobuki Button Events"%}

Let’s have a look at the code.

{% highlight sh %}
gedit kobuki_buttons.py
{% endhighlight %}

You can also [view it on GitHub](https://github.com/markwsilliman/turtlebot/blob/master/kobuki_buttons.py) if you prefer.

***CREDIT:** This script was inspired by [Yujin Robot's **test_events.py**](https://github.com/yujinrobot/kobuki/blob/f99e495b2b3be1e62495119809c58ccb58909f67/kobuki_testsuite/scripts/test_events.py) script.*

Interestingly enough, the code is almost identical to the battery monitoring scripts. You simply subscribe to the button event thread and the callback function is called every time an event occurs.