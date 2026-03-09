# Project1 – Urban Education & Culture Analytics

This repository contains synthetic datasets used for analytics and data visualization projects.

## Datasets

### NYC Higher Education Enrollment

Tracks student enrollment across colleges in New York City over 5 years.

Fields include:

* borough
* institution
* program
* modality
* credits

### Chicago Student Population Movement

Geospatial dataset showing student movement between Chicago neighborhoods.

Used for:

* heatmaps
* geographic mobility analysis

### Teacher Compliance Onboarding

Measures how quickly teachers complete compliance training after hiring.

Used for:

* HR analytics

Insight:
NYC museums have higher total attendance compared to Chicago in the dataset.

import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("museum_visitors_nyc_chicago_5y_30000.csv")

visitors = df.groupby("city")["party_size"].sum()

visitors.plot(kind="bar")
plt.title("Museum Visitors by City")
plt.show()
