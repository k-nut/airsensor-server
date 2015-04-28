# Airsensor Logger and Server
This simple utility queries the VELUX Raumluftfühler constantly and stores
the values in logfiles.
These logfiles can be viewed in a webbrowser as plots.

##Installation
- Install the airsensor c executable as described in https://code.google.com/p/usb-sensors-linux/wiki/Install_AirSensor_Linux
- Clone this repository and change into it
- Change the `config.ini` and add the pathes to the `airsensor` executable
and the folder where your logs should be stored
  - Right now the logs folder needs to be `logs` if you want to view
  the logs with the browser-tool.
- Run `python3 generate_logs.py` to start the loggin process (make sure that your device is connected)
  - You should now be able to see a file with the current date appear in the `Logs_dir` directory that you set in your config file
- Run `bower install` to install frontend dependencies. If you do not have bower install it with `npm install bower` first.

##Running the webserver
If you want to view the data `cd` into this directory and run `pyhon3 -m http.server` this will start a small server on port 9000. Visit it by browsing
to (http://localhost:9000). You should be able to see today's measurements

##License 
MIT
