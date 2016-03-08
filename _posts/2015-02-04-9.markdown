---
layout: post
title:  "Writing Your First Interaction"
date:   2015-02-04 10:00:09
answerrostag: "challenge_rocon_interaction"
track: [challenge]
---

In this lesson we will write user side of rocon application. We will learn how
to add follower application in application list.

## Prerequisites

This lesson is a continuation of the previous lesson:
["Multiple TurtleBots in Concert"]({{ site.url }}{% post_url 2015-02-04-6 %}).
If you have not done this lesson, do it firstly.

## Creating interaction

1\. Create interactions folder in `my_rapps`.
{% highlight sh %}
cd ~/my_ws/src/my_rapps/
mkdir interactions
cd ineractions
{% endhighlight %}

2\. Create `my.interactions` file with following content:
{% highlight sh %}
- name: ""
  role: My Interactions
  compatibility: rocon:/pc/*/hydro|indigo/precise|quantal|raring|saucy|trusty
  display_name: Follower
  description: Take the TurtleBot for a stroll. TurtleBot will follow  whatever is in front of it.
  max: -1
  icon:
    resource_name: my_rapps/follower_bubble_icon.png
  pairing:
    rapp: my_rapps/follower
    remappings: []
{% endhighlight %}

## Modifying concert_service_gazebo Package

1\. Clone `concert_services`.
{% highlight sh %}
cd ~/my_ws/src/
git clone https://github.com/robotics-in-concert/concert_services.git
{% endhighlight %}

2\. Change directory.
{% highlight sh %}
cd ~/my_ws/src/concert_services/
{% endhighlight %}

3\. Change git branch.
{% highlight sh %}
git checkout indigo
{% endhighlight %}

3\. Edit `robot.launch` file.
{% highlight sh %}
cd concert_service_gazebo/launch/
{% endhighlight %}

Add `robot_interactions` and `robot_interactions_list` arguments
below `robot_concert_whitelist` and above `include` tag.
{% highlight sh %}
<arg name="robot_interactions" default="false"/>
<arg name="robot_interactions_list" default="[]"/>
{% endhighlight %}

Add `interactions` and `interactions_list` arguments below
`concert_whitelist` and inside `include` tag.
{% highlight sh %}
<arg name="interactions" value="$(arg robot_interactions)"/>
<arg name="interactions_list" value="$(arg robot_interactions_list)"/>
{% endhighlight %}

4\. Edit `gazebo_robot_manager.py` file.
{% highlight sh %}
cd ~/my_ws/src/concert_services/concert_service_gazebo/src/concert_service_gazebo/
{% endhighlight %}

Add two strings in `_prepare_rocon_launch_text` function
{% highlight sh %}
launch_text += '    <arg name="robot_interactions" value="%s"/>\n' % robot['interactions']
launch_text += '    <arg name="robot_interactions_list" value="%s"/>\n' % str(robot['interactions_list'])
{% endhighlight %}

above this string
{% highlight sh %}
launch_text += '  </launch>'
{% endhighlight %}

We edit this file for using `robot_interactions` and `robot_interactions_list`
parameters.

## Modifying gazebo_concert Package

1\. Edit `gazebo.parameters` file.
{% highlight sh %}
cd ~/my_ws/src/rocon_tutorials/concert_tutorials/gazebo_concert/solutions/
{% endhighlight %}

Add `interactions` and `interactions_list` for each robot.
{% highlight sh %}
interactions: true
interactions_list: [turtlebot_bringup/documentation.interactions, my_rapps/my.interactions]
{% endhighlight %}

2\. Build package.
{% highlight sh %}
source /opt/ros/indigo/setup.bash
cd ~/my_ws/
catkin_make
{% endhighlight %}

## Running Follower Application

1\. Change the path.
{% highlight sh %}
source ~/my_ws/devel/setup.bash
{% endhighlight %}

2\. Launch gazebo_concert.
{% highlight sh %}
roslaunch gazebo_concert concert.launch
{% endhighlight %}

You will see these strings in each robot terminal.
{% highlight sh %}
[INFO] [WallTime: 1456371595.581037] [10.320000] Interactions : loading Follower [-My Interactions-/]
{% endhighlight %}

3\. Start rocon_remocon.
{% highlight sh %}
rocon_remocon
{% endhighlight %}

4\. Select `Gazebo Concert`->`User`->`Gazebo Viewer`.

You will see the familiar Gazebo world.

5\. Select `Concert Teleop` in `Interactions Chooser`.

6\. Select `gamza1` in the resource list and capture it.

7\. In a new terminal start rocon_remocon.
{% highlight sh %}
rocon_remocon
{% endhighlight %}

8\. Press `Add`. Edit `MASTER_URI`.
{% highlight sh %}
MASTER_URI = http://localhost:11412
{% endhighlight %}

{% include image.html img="/assets/sim_remocon_add_master.png" title="Remocon Add Master" %}

9\. Press `Add`. You will see ros master `gamza2`.

{% include image.html img="/assets/sim_remocon_gamza2.png" title="Remocon Master List" %}

10\. Select `gamza2`.

11\. Select `My Interactions`.

{% include image.html img="/assets/sim_role_chooser.png" title="Remocon Role Chooser" %}

12\. Select `Follower`.

{% include image.html img="/assets/sim_interactions_chooser.png" title="Remocon Interactions Chooser" %}

13\. Drive `gamza1` using joystick to initiate following behavior.

14\. Interrupt the processes. Close the windows.

You can watch these steps in the video:

{% include youtube.html youtubeid="z4-s81vw608" youtubetitle="Writing Your First Interaction"%}
