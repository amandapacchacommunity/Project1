# Project1 — Urban Education & Cultural Analytics

This project contains synthetic datasets and analysis exploring trends in higher education enrollment, student mobility, teacher compliance onboarding, and museum visitor activity in major U.S. cities.

The datasets were generated for analytics practice, visualization, and portfolio development.

---

# Datasets

## NYC Higher Education Enrollment

Tracks student enrollment across colleges in New York City over a five-year period.

Fields include:

* institution
* borough
* neighborhood
* academic term
* program
* modality
* credits attempted
* student age

Purpose:

* analyze enrollment distribution
* identify borough-level education patterns
* explore program popularity

---

## Chicago Student Population Movement

Geospatial dataset showing movement of student populations across Chicago neighborhoods.

Fields include:

* origin neighborhood
* destination neighborhood
* latitude / longitude coordinates
* year and month
* number of students moving

Purpose:

* create geographic heatmaps
* analyze student relocation trends
* study neighborhood mobility patterns

---

## Chicago Teacher Compliance Onboarding

Measures how quickly teachers complete compliance training after being hired at a college.

Fields include:

* department
* training type
* days to completion
* compliance deadline
* status (completed, late, escalated)

Purpose:

* HR analytics
* compliance monitoring
* onboarding efficiency analysis

---

## Museum Visitors — NYC & Chicago

Tracks visitor attendance and revenue trends for museums in both cities.

Fields include:

* city
* museum name
* visitor type
* party size
* ticket revenue
* visit date

Purpose:

* tourism analytics
* attendance pattern analysis
* revenue trend exploration

---

# Example Analysis

Example Python code used to analyze museum visitors by city:

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("museum_visitors_nyc_chicago_5y_30000.csv")

visitors = df.groupby("city")["party_size"].sum()

visitors.plot(kind="bar")

plt.title("Museum Visitors by City")
plt.ylabel("Total Visitors")

plt.show()
```

---

# Project Structure

```
Project1
│
├── data
│   ├── nyc_higher_education_enrollment_5y_30000.csv
│   ├── chicago_student_population_heatmap_movements_5y_30000.csv
│   ├── chicago_college_teacher_onboarding_compliance_5y_30000.csv
│   └── museum_visitors_nyc_chicago_5y_30000.csv
│
├── notebooks
│   └── museum_visitor_by_city.py
│
└── README.md
```

---

# Tools Used

* Python
* pandas
* matplotlib
* GitHub

---

# Dataset Size

Each dataset contains approximately **30,000 records**.

---

# Disclaimer

All data in this repository is **synthetic and generated for educational and analytics practice purposes**.
