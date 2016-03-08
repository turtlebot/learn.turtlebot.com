---
layout: post
title:  "Configuring the Final Script"
date:   2015-02-01 13:46:22
answerrostag: "config_script"
track: [coffeebot]
---

On the workstation, open a terminal and run:

{% highlight sh %}
cd ~/helloworld
gedit coffee_bot.py
{% endhighlight %}

Scroll down and find:

{% highlight sh %}
######## CHANGE THE FOLLOWING VALUES #########
{% endhighlight %}

There are four values you should change:

1. **server_public_dns** – Set this to your EC2 account’s public DNS. Make sure you start with http://.
2. **near_dock_station_x** – Set this to the ‘x’ value near your docking station.
3. **near_dock_station_y** – Set this to the ‘y’ value near your docking station.
4. **kobuki_base_max_charge** – Set this to the maximum battery charge of your kobuki base.

Save your changes and exit the editor.

#### Help

* **How do I find my public DNS?** Scroll down to “Determining Your Public DNS” [in this article]({{ site.url }}{% post_url 2015-02-01-20 %}).
* **How do I find a point near my docking station?** Follow the directions from [this article]({{ site.url }}{% post_url 2015-02-01-19 %}).
* **How do I determine the maximum battery charge of my Kobuki base?** Scroll down to “Determine the maximum charge value of the Kobuki base” [in this article]({{ site.url }}{% post_url 2015-02-01-16 %}).
