---
layout: post
title:  "Teleoperation"
date:   2015-02-03 10:00:05
answerrostag: "simulation_teleoperation"
track: [simulation]
---

Teleoperation allows you to control TurtleBot manually. There are different
ways: keyboard, joystick, QT teleop, interactive markers. Our tutorial will
cover keyboard and interactive markers method.

In this lesson we will show the tricks in terminal:

1. Using Up and Down Arrow keys you can switch between the last-used commands.
2. Use `Ctrl+R` combination to invoke `reverse-i-search`. Type letters, `gaz`
for instance, and you will get a match for the recent command in your history which
has `gaz`. You can press `Ctrl+R` again to go to the previous command in this
search. When you see the proper command press `Enter` to execute it or Right Arrow
to choose this command for editing.

We show using these tricks in tutorial videos for this lesson with explanations.
Later we will assume that you understand how it works.

## Keyboard

While Gazebo and Rviz are running, open a new terminal and run:
{% highlight sh %}
roslaunch turtlebot_teleop keyboard_teleop.launch
{% endhighlight %}

***NOTE:*** *The terminal with teleop launching has to be active all the time
otherwise you will not be able to operate the TurtleBot.*

TurtleBot can move forward and backward, rotate. Also you can increase/decrease
the speed. See the instructions in the terminal output:

{% include image.html img="/assets/sim_teleop_keyboard.png" title="Control Keys" %}

You can watch how it works in this video:

{% include youtube.html youtubeid="y9JD16ywdR0" youtubetitle="Teleoperation Keyboard"%}

## Interactive Markers

You can control TurtleBot in Rviz. Check that you have the interactive markers
packages installed:
{% highlight sh %}
sudo apt-get install ros-indigo-turtlebot-interactive-markers
{% endhighlight %}

While Gazebo and Rviz are running, open a new terminal and run:
{% highlight sh %}
roslaunch turtlebot_interactive_markers interactive_markers.launch
{% endhighlight %}

Follow the steps below to see the robot’s movements:

1. Enable `Interactive Markers` option from left-bar.
2. Select the `Interact` tool in the tool panel on the top of the screen. You
will see blue ring and red arrows.
3. Drag the red arrows to drive the TurtleBot forward and backward.
4. Drag the blue ring to rotate the TurtleBot.
5. You can drag the blue ring to rotate and drive simultaneously.

{% include image.html img="/assets/sim_teleop_inter_markers.png" title="Control Markers" %}

You can watch how it works in this video:

{% include youtube.html youtubeid="r9QiHWLnkYk" youtubetitle="Teleoperation Interactive Markers"%}
