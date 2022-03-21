# InfoVisHW3
InfoVis Homework 3

This homework uses Webpack. To enable live-server, run the following in VSCode terminal:

npm install

npx webpack server

and then in the VSCode terminal, click and enter the link appeared at this line: [webpack-dev-server] Loopback: http://blablablablabla

If error appears saying that "address already in use :::9000", for Windows users, please search for your command prompt, right click on it, and run as administrator. Then run this line here:

netstat -ano|findstr "PID :9000"

Then you will see a list of ports and their PID's. Let's now kill all the ports with those PID's. Replace the "xxxxx" below with your PID's, and run it.

taskkill /pid xxxxx /f

Now go back to VSCode terminal and do again npx webpack server

scatter_plot/
