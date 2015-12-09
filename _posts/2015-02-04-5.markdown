---
layout: post
title:  "Following the Route Using Code"
date:   2015-02-04 10:00:05
answerrostag: "challenge_following_the_route"
track: [challenge]
---

We will combine our skills from two lessons:
["Going to a Specific Location on Your Map Using Code"]({{ site.url }}{% post_url 2015-02-03-11 %})
and ["Taking a Photo Using Code"]({{ site.url }}{% post_url 2015-02-04-3 %}).
The TurtleBot will go from the start to each goal from the list and take a
photo in every position.

{% include using_github_rep.md %}

## Launching Script

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Run navigation demo.
{% highlight sh %}
roslaunch turtlebot_gazebo amcl_demo.launch
{% endhighlight %}

3\. Open a new terminal and change directory.
{% highlight sh %}
cd ~/helloworld/turtlebot
{% endhighlight %}

4\. Launch script.
{% highlight sh %}
python follow_the_route.py
{% endhighlight %}

You will find explanations below.

5\. See the results. Open image file.
{% highlight sh %}
eog bookshelf.jpg
{% endhighlight %}

***NOTE:*** *You can use image viewer which you prefer.*

You will see the image:

{% include image.html img="/assets/sim_bookshelf.png" title="Bookshelf.jpg" %}

6\. Interrupt Gazebo. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="HHGj7eliX04" youtubetitle="Following the Route Using Code"%}

## Explanations

We use the code `go_to_specific_point_on_map.py` and `take_photo.py` from
previous lessons. `Follow_the_route.py` reads input data from `route.yaml` file.
The YAML file has three lines. It means that there are three goals. Look on the
first line:
{% highlight sh %}
- {filename: 'dumpster.png', position: { x: 0.355, y: -0.2}, quaternion: {r1: 0, r2: 0, r3: -0.628, r4: 0.778}}
{% endhighlight %}

The `dumpster.png` is the image title for picture. The position and quaternion
set the goal: the place where TurtleBot takes a photo. We discussed how to
define position and quaternion values in
["Going to a Specific Location on Your Map Using Code"]({{ site.url }}{% post_url 2015-02-03-11 %})
lesson. You can modify this YAML file.

***NOTE:*** *You should use one space between `-` and `{` in the beginning of
  the line in YAML file. For more information read [official YAML documentation](http://www.yaml.org/spec/1.2/spec.html).*

If TurtleBot cannot reach the goal it does not take a photo and goes to the
next goal in the list. If you want to stop TurtleBot you can press `Ctrl+C`.

You can read comments in the `follow_the_route.py` file.
