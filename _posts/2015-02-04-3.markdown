---
layout: post
title:  "Taking a Photo Using Code"
date:   2015-02-04 10:00:03
answerrostag: "challenge_photo_using_code"
track: [challenge]
---

We have learned how to take a photo manually, but it is not very convenient.
In this lesson we will learn how to take a photo using a script.

{% include using_github_rep.md %}

## Launching Script

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Open a new terminal and change directory.
{% highlight sh %}
cd ~/helloworld/turtlebot
{% endhighlight %}

3\. Launch script.
{% highlight sh %}
python take_photo.py
{% endhighlight %}

You will see this string in terminal:
{% highlight sh %}
[INFO] [WallTime: 1456885227.493792] [646.730000] Saved image photo.jpg
{% endhighlight %}

4\. See the results. Open the image file.
{% highlight sh %}
ristretto photo.jpg
{% endhighlight %}

***NOTE:*** *You can use image viewer which you prefer. For instance, you can
use eog which is GNOME image viewer.*

{% highlight sh %}
eog photo.jpg
{% endhighlight %}

5\. Interrupt Gazebo. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="YoPz2lHzfDk" youtubetitle="Taking a Photo Using Code"%}

## Using ROS Parameter

You can use ros parameter to change the title of the image. You can find the
line in the `take_photo.py`:
{% highlight sh %}
img_title = rospy.get_param('~image_title', 'photo.jpg')
{% endhighlight %}

The program fetches value from the parameter server. If the parameter is not set
 it uses the default value `photo.jpg`.

Let’s check if the parameter is set. We will look for `/take_photo/image_title`
parameter, because `image_title` parameter is a private parameter (`~` before
  `image title`) for `take_photo` node. Launch.
{% highlight sh %}
rosparam list | grep image_title
# Output:
{% endhighlight %}

The parameter is not set. Launch the program with parameter.
{% highlight sh %}
python take_photo.py _image_title:="new_title.jpg"
{% endhighlight %}

The title of the saved photo is `new_title.jpg`. This command sets the
`/take_photo/image_title` parameter. Let’s check if the parameter set.
{% highlight sh %}
rosparam list | grep image_title
# Output:
/take_photo/image_title
{% endhighlight %}

Now the program will use the title from parameter server. Check the current value.
{% highlight sh %}
rosparam get /take_photo/image_title
# Output:
new_title.jpg
{% endhighlight %}

Launch the program without a parameter.
{% highlight sh %}
python take_photo.py
{% endhighlight %}

The title of the saved photo is `new_title.jpg`. `new_title.jpg` is the value
from ros parameter server.

There is a brief introduction of ros parameters. You can read more about ros
parameters on [wiki ros](http://wiki.ros.org/Parameter%20Server).
