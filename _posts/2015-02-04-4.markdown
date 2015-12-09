---
layout: post
title:  "Recording a Video"
date:   2015-02-04 10:00:04
answerrostag: "challenge_video"
track: [challenge]
---

In this lesson we will learn how to record a video. TurtleBot has different
image topics. We will work with `/camera/rgb/image_raw`.

***NOTE:*** *Sometimes recording a video does not work properly. In this case
skip this lesson.*

1\. Launch Gazebo.
{% highlight sh %}
roslaunch turtlebot_gazebo turtlebot_world.launch
{% endhighlight %}

2\. Open a new terminal and run:
{% highlight sh %}
roslaunch turtlebot_teleop keyboard_teleop.launch
{% endhighlight %}

3\. In a new terminal run image_view.
{% highlight sh %}
rosrun image_view image_view image:=/camera/rgb/image_raw
{% endhighlight %}

4\. Open a new terminal and make a directory.
{% highlight sh %}
mkdir ~/turtlebot_videos
{% endhighlight %}

5\. Change directory.
{% highlight sh %}
cd ~/turtlebot_videos
{% endhighlight %}

6\. Run video recorder.
{% highlight sh %}
rosrun image_view video_recorder image:=/camera/rgb/image_raw
{% endhighlight %}

You will see these strings in terminal:
{% highlight sh %}
[ INFO] [1453124521.982593277]: Waiting for topic /camera/rgb/image_raw...
[ INFO] [1453124522.175860991, 2771.980000000]: Starting to record MJPG video
at [640 x 480]@15fps. Press Ctrl+C to stop recording.
{% endhighlight %}

7\. Move TurtleBot.

***NOTE:*** *The terminal with teleop launching has to be active all the time
otherwise you won’t be able to operate the TurtleBot.*

8\. Press `Ctrl+C` to finish recording. You will see these strings in terminal:
{% highlight sh %}
^CINFO] [1453124549.590776602, 2799.370000000]: Recording frame 549
Video saved as output.avi
{% endhighlight %}

9\. Launch video using vlc media player.
{% highlight sh %}
vlc output.avi
{% endhighlight %}

***NOTE:*** *You can use media player which you prefer.*

10\. Interrupt the processes. Close the terminals.

You can watch these steps in the video:

{% include youtube.html youtubeid="QOB9QQQaMaA" youtubetitle="Recording a Video"%}

You can read more about video_recorder on
[wiki_ros](http://wiki.ros.org/image_view).
