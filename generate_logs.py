import subprocess
import datetime
import configparser
import os

config = configparser.ConfigParser()
config.read("config.ini")
paths = config["PATHS"]

AIRSENSOR_EXECUTABLE = os.path.abspath(paths["Airsensor_path"])
LOGS_DIR = os.path.abspath(paths["Logs_dir"])
def main():
    while True:
        today = datetime.date.today().isoformat()
        todays_logfile = os.path.join(LOGS_DIR, today + ".csv")
        with open(todays_logfile, "a") as log:
            reading = subprocess.check_output([AIRSENSOR_EXECUTABLE, "-o"])
            log.write(reading.decode("utf-8"))

if __name__ == "__main__":
    main()
