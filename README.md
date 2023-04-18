# World Happiness Dashboard

## Table of Contents

- [Presentation](#presentation)
- [About](#about)
- [Summary](#summary)
- [Visualizations](#visualizations)

## Presentation
[Prensentation Link](https://docs.google.com/presentation/d/1eb7Te0I8TU6Q_jBT9F4Fd7AI6qlN6L8rRtMT3MaH9Ys/edit?usp=sharing)

## About
[World Happiness Dataset](https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021)
- The World Happiness Report is a landmark survey of the state of global happiness . The report continues to gain global recognition as governments, organizations and civil society increasingly use happiness indicators to inform their policy-making decisions. Leading experts across fields – economics, psychology, survey analysis, national statistics, health, public policy and more – describe how measurements of well-being can be used effectively to assess the progress of nations. The reports review the state of happiness in the world today and show how the new science of happiness explains personal and national variations in happiness.
- The happiness scores and rankings use data from the Gallup World Poll . The columns following the happiness score estimate the extent to which each of six factors – economic production, social support, life expectancy, freedom, absence of corruption, and generosity – contribute to making life evaluations higher in each country than they are in Dystopia, a hypothetical country that has values equal to the world’s lowest national averages for each of the six factors. They have no impact on the total score reported for each country, but they do explain why some countries rank higher than others.

[World Weather Dataset](https://www.kaggle.com/datasets/balabaskar/historical-weather-data-of-all-country-capitals)
- This dataset contains the daily weather data recorded in the capital location (based on lat, long values) of 194 countries in the world. The data contains the following information:
- date - weather data recorded date
- country - name of the country
- city - name of the city
- Latitude - latitude value of the city location
- Longitude - longitude value of the city location
- tavg - The average air temperature in °C
- tmin - The minimum air temperature in °C
- tmax - The maximum air temperature in °C
- wdir - The average wind direction in degrees (°)
- wspd - The average wind speed in km/h
- pres - The average sea-level air pressure in hPa


## Summary
Our team's goal was to utlizie the happiness and weather datasets to draw insights on what makes people happy around the world. We wanted to determine if there were any correlations between country gdp, life expectancy, social support, weather, etc. We then created visualizations of the cleaned/merged datasets to draw conclusions. 

## Visualizations
**Leaflet Happiness Map**
![Screenshot 2023-04-18 at 1 04 54 PM](https://user-images.githubusercontent.com/10196762/232851914-0ebbe30a-3424-48e2-b8b0-66324a8567ca.png)
- Using the lat and long coordinates from our merged dataframe, we were able to successfully map all country capitals with pop up markers displaying happiness metrics from our data. 

**Plotly: Bubble Chart**
![Screenshot 2023-04-18 at 1 04 19 PM](https://user-images.githubusercontent.com/10196762/232851848-e101ea6d-aa74-4185-b190-f04fe92751dd.png)
- The dataset displays a correlation between high GDP per capita and longer life expectancy. Citizens that live in countries with a higher GDP have longer life expectancies and social support (bubble colors). 

