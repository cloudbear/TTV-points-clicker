# TTV Points Clicker

*A simple Tampermonkey script to periodically check for and click Twitch.tv's channel points bonus box.*

## How to use

1. Install the Tampermonkey (or Greasemonkey or whatever) extension in your browser;
2. Download `twitch.tv.user.js`;
3. Copy the contents of the file into a new userscript;
4. While watching any stream, sit back and watch the bonus boxes be claimed automatically

## How it works

First, the script waits for sixty seconds to give Twitch ample time to load its interface.

Then, the script checks that channel points are enabled. It does this every 5 minutes.

If channel points are enabled, the script starts a ten-second 'interval' timer. Every ten seconds, This timer triggers a function that looks for the bonus box and clicks it if it finds it.
