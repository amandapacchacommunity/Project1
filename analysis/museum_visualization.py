import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("museum_visitors_nyc_chicago_5y_30000.csv")

visitors = df.groupby("city")["party_size"].sum()

visitors.plot(kind="bar")

plt.title("Museum Visitors by City")
plt.ylabel("Visitors")

plt.show()
