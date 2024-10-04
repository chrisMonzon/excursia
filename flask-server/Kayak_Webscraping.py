from time import sleep
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
import bs4
# from bs4 import BeautifulSoup
from bs4 import BeautifulSoup
# from selenium.webdriver.chrome.options import Options

import os

def scrape(from_location, to_location, departure_date, arrival_date):


    driver = webdriver.Chrome()
    # options = Options()
    # options.add_argument("--headless")

    # options = webdriver.ChromeOptions()
    # options.add_argument('--headless=new')
    # driver = webdriver.Chrome(options=options)

    # from_location = 'ORD'
    # to_location = 'SMO,LAX'
    # departure_date = '2023-12-07'
    # arrival_date = '2023-12-08'

    # SAMPLE URL: https://www.kayak.com/flights/ORD-SMO,LAX/2023-12-07/2023-12-08?sort=bestflight_a
    url_kayak = 'https://www.kayak.com/flights/{from_location}-{to_location}/{departure_date}/{arrival_date}?sort=bestflight_a'.format(from_location = from_location, to_location=to_location, departure_date=departure_date, arrival_date=arrival_date)
    # SAMPLE URL: https://www.expedia.com/Flights-Search?d1=2023-11-23&d2=2023-11-24&flight-type=on&fromDate=11%2F23%2F2023&leg1=from%3AChicago%2C%20IL%2C%20United%20States%20of%20America%20%28ORD-O%27Hare%20Intl.%29%2Cto%3ASanta%20Monica%2C%20California%2C%20United%20States%20of%20America%2Cdeparture%3A11%2F23%2F2023TANYT&leg2=from%3ASanta%20Monica%2C%20California%2C%20United%20States%20of%20America%2Cto%3AChicago%2C%20IL%2C%20United%20States%20of%20America%20%28ORD-O%27Hare%20Intl.%29%2Cdeparture%3A11%2F24%2F2023TANYT&mode=search&options=cabinclass%3Aeconomy&passengers=adults%3A2%2Cinfantinlap%3AN&pwaDialog=updatedialog&toDate=11%2F24%2F2023&trip=roundtrip
    # Add url for expedia --> url_expedia = ''.format

    driver.get(url_kayak)
    #sleep(5)
    # No pop up window for us!

    flight_rows = driver.find_elements(By.CLASS_NAME, 'nrc6-wrapper')
    #print(flight_rows)

    lst_prices = []

    for WebElement in flight_rows:
        elementHTML = WebElement.get_attribute('outerHTML')
        elementSoup = BeautifulSoup(elementHTML, 'html.parser')
        temp_price = elementSoup.find("div", {"class": "f8F1-price-text"})
        lst_prices.append(temp_price.text)

    print(lst_prices)

    #sleep(5) # Keep the page open!
    return lst_prices

