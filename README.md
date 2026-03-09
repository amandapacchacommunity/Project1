Urban Education & Mobility Analytics Dashboard

A data analytics dashboard exploring patterns in urban education, student mobility, teacher onboarding performance, and museum engagement across major U.S. cities.

This project demonstrates how data analysis can support insights into education systems and cultural participation using interactive visualizations and summary metrics.

Project Goal

The goal of this project is to analyze urban education and engagement trends across cities and demonstrate core data analytics skills including:

Data cleaning and preparation

Exploratory data analysis

Data visualization

Trend identification

Insight generation

Business-style recommendations

Key analytical objectives include:

• Understanding student enrollment distribution across NYC boroughs
• Analyzing seasonal patterns in student mobility in Chicago
• Evaluating teacher onboarding compliance performance
• Comparing museum attendance between cities

Dashboard Overview

The interactive dashboard highlights several key metrics and trends.

Key Metrics
Metric	Description
Total Enrollment	Student enrollment across NYC boroughs
Student Movement	Monthly student transfers across schools
Teacher Onboarding	Completion rate of teacher compliance processes
Museum Attendance	Total museum visitors by city
Key Insights

The dashboard reveals several patterns in the simulated datasets:

• Manhattan shows the highest student enrollment (~7,000 students).
• Student mobility peaks during late spring, suggesting transfer activity before summer.
• Teacher onboarding completion is approximately 65%, with about 35% delayed or escalated.
• Museum attendance in NYC is roughly 15–18% higher than Chicago, indicating stronger cultural engagement or tourism volume.

Visual Analysis

The dashboard includes several analytical visualizations.

Museum Attendance Comparison

Compares visitor volume between NYC and Chicago museums.

Insight:
NYC museums receive approximately 18% more visitors than Chicago.

Teacher Compliance Completion Analysis

Displays the distribution of teacher onboarding statuses.

Categories include:

Completed

Delayed

Escalated

This helps evaluate onboarding efficiency.

Enrollment Distribution by Borough

Example distribution:

Borough	Enrollment	% of Total
Manhattan	7000	23%
Brooklyn	6500	21%
Queens	6200	20%

This type of analysis helps identify where resources or capacity may be needed.

Student Mobility Trend

Monthly movement data highlights seasonal patterns in school transfers.

Insight:

Peak student movement occurs in late spring, likely due to school transfers before summer break.

Dataset Overview

This project integrates several simulated datasets to represent real-world analytical scenarios.

Datasets include:

• NYC Higher Education Enrollment dataset (~30,000 records)
• Chicago Student Mobility dataset
• Teacher onboarding and compliance records
• Museum attendance estimates across cities

These datasets were aggregated to illustrate trends in enrollment distribution, staffing readiness, mobility patterns, and cultural engagement.

Data Preparation

Several data preparation steps were performed before analysis.

Examples include:

Removing duplicate enrollment records

Standardizing borough and city names

Aggregating monthly student movement totals

Calculating onboarding completion rates

Preparing summary metrics for dashboard KPIs

These steps reflect common data cleaning and preparation tasks performed by data analysts.

Interactive Filters

The dashboard includes filters that allow users to explore the data across multiple dimensions.

Available filters include:

Year
City
Borough
School Type

Example selections:

Year: 2022 | 2023 | 2024
City: NYC | Chicago

These filters allow deeper exploration of patterns within the datasets.

Recommendations

Based on the analysis, several potential actions can be considered:

Improve teacher onboarding monitoring
Earlier compliance tracking may reduce onboarding delays.

Investigate borough enrollment differences
Lower enrollment in Queens compared to Manhattan may warrant further study.

Prepare schools for peak transfer periods
Late spring mobility spikes suggest staffing and resource planning needs.

Increase museum outreach in Chicago
Chicago museums may benefit from stronger marketing or educational partnerships.

Project Structure
repository
│
├── dashboard
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── analysis
│
├── notebooks
│   └── project1_analysis.ipynb
│
├── city_analytics_datasets
│
├── images
│
├── README.md
└── data_dictionary.md
Technologies Used

This project uses simple web technologies to build an interactive analytics dashboard.

HTML

CSS

JavaScript

Chart.js

Jupyter Notebook (for exploration)

Synthetic datasets for analysis

Synthetic Data Disclaimer

The datasets used in this project are synthetic and generated for educational and portfolio demonstration purposes.

While the data structure and trends are designed to resemble realistic analytical scenarios, the figures presented in this dashboard do not represent official statistics or real institutional data.

What This Project Demonstrates

This project highlights several core skills expected from data analysts:

✔ Data cleaning and preparation
✔ Data visualization and dashboard design
✔ Trend identification and pattern recognition
✔ Analytical storytelling
✔ Insight generation and recommendations

The goal is to demonstrate how data can be used to support decision-making in education and cultural engagement contexts.

Author

Amanda Paccha

Data analytics portfolio project exploring urban education and mobility patterns.
