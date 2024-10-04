# Selenuim imports
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import selenium.common.exceptions as selexcept
from selenium.webdriver.chrome.service import Service
# Pandas imports using Pandas for structuring our data
import pandas as pd
from datetime import datetime
import os.path
import re
import sys
import glob
# Time and date-time (mainly for using delays between clicks)
import time

# Change this to your own chromedriver path!
service = Service(executable_path='C:/Users/trish/Downloads/chromedriver_win32/chromedriver.exe')
options = webdriver.ChromeOptions()
    
# This will open the Chrome window
browser = webdriver.Chrome(service=service, options=options)

# Setting Round Trip type path
return_ticket = "//label[@id='flight-type-roundtrip-label-hp-flight']"