import pandas as pd

df = pd.read_csv("museum_visitors_nyc_chicago_5y_30000.csv")

print(df.head())

print(df.groupby("city")["revenue"].sum())
