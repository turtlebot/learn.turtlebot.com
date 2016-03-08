---
layout: post
title:  "Taking a Photo"
date:   2015-02-04 10:00:02
answerrostag: "challenge_taking_photo"
track: [challenge]
---

In this lesson we will learn how to take a photo. TurtleBot has different image
topics. We will work with `/camera/rgb/image_raw`. We will use `image_view`
package. It is a simple image viewer for ROS image topics.

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Open a new terminal and make a directory.
{% highlight sh %}
mkdir ~/turtlebot_photos
{% endhighlight %}

3\. Change directory.
{% highlight sh %}
cd ~/turtlebot_photos
{% endhighlight %}

4\. Run image_view.
{% highlight sh %}
rosrun image_view image_view image:=/camera/rgb/image_raw
{% endhighlight %}

You will see this string in terminal:
{% highlight sh %}
[ INFO] [1453121826.078872739]: Using transport "raw"
{% endhighlight %}

You will see what TurtleBot sees.

{% include image.html img="/assets/sim_image_viewer.png" title="Display Window" %}

5\. Make right-click on the picture to take a photo.

You will see this string in terminal:
{% highlight sh %}
[ INFO] [1453123006.159523449, 1257.230000000]: Saved image frame0000.jpg
{% endhighlight %}

6\. By default, images will be saved as `frame0000.jpg, frame0001.jpg`.
You can control name, location and format of saved images using `_filename_format`
parameter.

6.1 Interrupt the current process (press `Ctrl+C`).

6.2 Run image_view with `_filename_format` parameter.
{% highlight sh %}
rosrun image_view image_view image:=/camera/rgb/image_raw _filename_format:="tutorial%02i.jpg"
{% endhighlight %}

6.3 Make right-click on the picture to take a photo.

6.4 The picture will be saved as `tutorial00.jpg`.

***NOTE:*** *If you want to change the location use full path to the folder you want.*

*Incorrectly:*
{% highlight sh %}
 _filename_format:="~/turtlebot_photos/tutorial%02i.jpg"
{% endhighlight %}

*Correctly:*
{% highlight sh %}
_filename_format:="/home/your_name/turtlebot_photos/tutorial%02i.jpg"
{% endhighlight %}

7\. Interrupt the process.

8\. Run `ls` command.
{% highlight sh %}
ls
{% endhighlight %}

You will see the new files.

9\. Open the image file.
{% highlight sh %}
ristretto tutorial00.jpg
{% endhighlight %}

***NOTE:*** *You can use image viewer which you prefer. For instance, you can
use eog which is GNOME image viewer.*

{% highlight sh %}
eog tutorial00.jpg
{% endhighlight %}

You will see the image.

10\. Interrupt Gazebo. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="M3rNT0I_ofQ" youtubetitle="Taking a Photo"%}

You can read more about image_view package and its parameters on
[wiki_ros](http://wiki.ros.org/image_view).
