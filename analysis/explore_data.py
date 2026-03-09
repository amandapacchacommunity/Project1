import pandas as pd

# load museum dataset
df = pd.read_csv("museum_visitors_nyc_chicago_5y_30000.csv")

# preview dataset
print(df.head())

# visitor totals by city
city_visitors = df.groupby("city")["party_size"].sum()

print("Visitors by City:")
print(city_visitors)

# revenue by city
revenue = df.groupby("city")["revenue"].sum()

print("Revenue by City:")
print(revenue)
