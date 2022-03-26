# InfoVisHW3
InfoVis Homework 3

## How to run code in each Qx.x/ folder:

This homework uses Webpack. If you want to install a new environment for the live-server on your local machine, delete node_modules/ folder in each of the Qx.x/ folders, delete package-lock.json, and run:

#### npm install

#### npx webpack server

and then in the VSCode terminal, click and enter the link appeared at this line: [webpack-dev-server] Loopback: http://blablablablabla

If error appears saying that "address already in use :::9000", for Windows users, please search for your command prompt, right click on it, and run as administrator. Then run this line here:

#### netstat -ano|findstr "PID :9000"

Then you will see a list of ports and their PID's. Let's now kill all the ports with those PID's. Replace the "xxxxx" below with your PID's, and run it.

#### taskkill /pid xxxxx /f

Now go back to VSCode terminal and do again npx webpack server

## Folders and what's inside

### src

The original code skeleton

### Q1.1/

Draw scatter plot

### Q1.2/

Draw a barchart below

### Q1.3/

Mouse interaction in scatterplot using React and hook

### Q1.4/

Mouse interaction in barchart using React and hook

### Q1.5/

linke the 2 interactions

### Q1.6/

Tooltip with mouse interaction

