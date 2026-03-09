import pandas as pd
import json

df = pd.read_csv("data/museum_visitors_nyc_chicago_5y_30000.csv")

summary = (
    df.groupby("city", as_index=False)["party_size"]
    .sum()
)

output = {
    "labels": summary["city"].tolist(),
    "values": summary["party_size"].tolist()
}

with open("dashboard/museum_summary.json", "w") as f:
    json.dump(output, f, indent=2)

print("museum_summary.json created")
