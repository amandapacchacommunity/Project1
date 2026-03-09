const dashboardData = {
  enrollment: [
    { year: 2022, city: "NYC", borough: "Manhattan", schoolType: "Public", value: 6500 },
    { year: 2022, city: "NYC", borough: "Brooklyn", schoolType: "Public", value: 6100 },
    { year: 2022, city: "NYC", borough: "Queens", schoolType: "Public", value: 5800 },
    { year: 2022, city: "NYC", borough: "Bronx", schoolType: "Public", value: 4500 },
    { year: 2022, city: "NYC", borough: "Staten Island", schoolType: "Public", value: 1800 },

    { year: 2023, city: "NYC", borough: "Manhattan", schoolType: "Charter", value: 6800 },
    { year: 2023, city: "NYC", borough: "Brooklyn", schoolType: "Charter", value: 6300 },
    { year: 2023, city: "NYC", borough: "Queens", schoolType: "Charter", value: 6000 },
    { year: 2023, city: "NYC", borough: "Bronx", schoolType: "Charter", value: 4700 },
    { year: 2023, city: "NYC", borough: "Staten Island", schoolType: "Charter", value: 1900 },

    { year: 2024, city: "NYC", borough: "Manhattan", schoolType: "Public", value: 7000 },
    { year: 2024, city: "NYC", borough: "Brooklyn", schoolType: "Public", value: 6500 },
    { year: 2024, city: "NYC", borough: "Queens", schoolType: "Public", value: 6200 },
    { year: 2024, city: "NYC", borough: "Bronx", schoolType: "Public", value: 4900 },
    { year: 2024, city: "NYC", borough: "Staten Island", schoolType: "Public", value: 2000 },

    { year: 2024, city: "NYC", borough: "Manhattan", schoolType: "Private", value: 1200 },
    { year: 2024, city: "NYC", borough: "Brooklyn", schoolType: "Private", value: 1100 },
    { year: 2024, city: "NYC", borough: "Queens", schoolType: "Private", value: 1000 },
    { year: 2024, city: "NYC", borough: "Bronx", schoolType: "Private", value: 800 },
    { year: 2024, city: "NYC", borough: "Staten Island", schoolType: "Private", value: 350 }
  ],

  movement: [
    { year: 2022, city: "Chicago", month: "Jan", value: 900 },
    { year: 2022, city: "Chicago", month: "Feb", value: 980 },
    { year: 2022, city: "Chicago", month: "Mar", value: 1120 },
    { year: 2022, city: "Chicago", month: "Apr", value: 1210 },
    { year: 2022, city: "Chicago", month: "May", value: 1500 },
    { year: 2022, city: "Chicago", month: "Jun", value: 1310 },
    { year: 2022, city: "Chicago", month: "Jul", value: 1100 },
    { year: 2022, city: "Chicago", month: "Aug", value: 1040 },
    { year: 2022, city: "Chicago", month: "Sep", value: 980 },
    { year: 2022, city: "Chicago", month: "Oct", value: 930 },
    { year: 2022, city: "Chicago", month: "Nov", value: 880 },
    { year: 2022, city: "Chicago", month: "Dec", value: 840 },

    { year: 2023, city: "Chicago", month: "Jan", value: 940 },
    { year: 2023, city: "Chicago", month: "Feb", value: 1010 },
    { year: 2023, city: "Chicago", month: "Mar", value: 1150 },
    { year: 2023, city: "Chicago", month: "Apr", value: 1270 },
    { year: 2023, city: "Chicago", month: "May", value: 1570 },
    { year: 2023, city: "Chicago", month: "Jun", value: 1380 },
    { year: 2023, city: "Chicago", month: "Jul", value: 1140 },
    { year: 2023, city: "Chicago", month: "Aug", value: 1080 },
    { year: 2023, city: "Chicago", month: "Sep", value: 1020 },
    { year: 2023, city: "Chicago", month: "Oct", value: 960 },
    { year: 2023, city: "Chicago", month: "Nov", value: 900 },
    { year: 2023, city: "Chicago", month: "Dec", value: 860 },

    { year: 2024, city: "Chicago", month: "Jan", value: 980 },
    { year: 2024, city: "Chicago", month: "Feb", value: 1060 },
    { year: 2024, city: "Chicago", month: "Mar", value: 1180 },
    { year: 2024, city: "Chicago", month: "Apr", value: 1300 },
    { year: 2024, city: "Chicago", month: "May", value: 1650 },
    { year: 2024, city: "Chicago", month: "Jun", value: 1420 },
    { year: 2024, city: "Chicago", month: "Jul", value: 1180 },
    { year: 2024, city: "Chicago", month: "Aug", value: 1100 },
    { year: 2024, city: "Chicago", month: "Sep", value: 1050 },
    { year: 2024, city: "Chicago", month: "Oct", value: 980 },
    { year: 2024, city: "Chicago", month: "Nov", value: 920 },
    { year: 2024, city: "Chicago", month: "Dec", value: 890 }
  ],

  onboarding: [
    { year: 2022, city: "NYC", status: "Completed", value: 62 },
    { year: 2022, city: "NYC", status: "Delayed", value: 26 },
    { year: 2022, city: "NYC", status: "Escalated", value: 12 },

    { year: 2023, city: "NYC", status: "Completed", value: 64 },
    { year: 2023, city: "NYC", status: "Delayed", value: 24 },
    { year: 2023, city: "NYC", status: "Escalated", value: 12 },

    { year: 2024, city: "NYC", status: "Completed", value: 65 },
    { year: 2024, city: "NYC", status: "Delayed", value: 23 },
    { year: 2024, city: "NYC", status: "Escalated", value: 12 },

    { year: 2022, city: "Chicago", status: "Completed", value: 60 },
    { year: 2022, city: "Chicago", status: "Delayed", value: 28 },
    { year: 2022, city: "Chicago", status: "Escalated", value: 12 },

    { year: 2023, city: "Chicago", status: "Completed", value: 62 },
    { year: 2023, city: "Chicago", status: "Delayed", value: 26 },
    { year: 2023, city: "Chicago", status: "Escalated", value: 12 },

    { year: 2024, city: "Chicago", status: "Completed", value: 63 },
    { year: 2024, city: "Chicago", status: "Delayed", value: 25 },
    { year: 2024, city: "Chicago", status: "Escalated", value: 12 }
  ],

  museums: [
    { year: 2022, city: "NYC", visitors: 2300000 },
    { year: 2022, city: "Chicago", visitors: 1980000 },
    { year: 2023, city: "NYC", visitors: 2450000 },
    { year: 2023, city: "Chicago", visitors: 2100000 },
    { year: 2024, city: "NYC", visitors: 2600000 },
    { year: 2024, city: "Chicago", visitors: 2200000 }
  ]
};

let museumChart;
let onboardingChart;
let enrollmentChart;
let movementChart;

const yearFilter = document.getElementById("yearFilter");
const cityFilter = document.getElementById("cityFilter");
const boroughFilter = document.getElementById("boroughFilter");
const schoolTypeFilter = document.getElementById("schoolTypeFilter");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatPercent(value) {
  return `${value.toFixed(0)}%`;
}

function getSelectedYear() {
  return yearFilter.value === "all" ? "all" : Number(yearFilter.value);
}

function filterEnrollmentData() {
  return dashboardData.enrollment.filter((item) => {
    const yearMatch = getSelectedYear() === "all" || item.year === getSelectedYear();
    const cityMatch = cityFilter.value === "all" || item.city === cityFilter.value;
    const boroughMatch = boroughFilter.value === "all" || item.borough === boroughFilter.value;
    const schoolTypeMatch = schoolTypeFilter.value === "all" || item.schoolType === schoolTypeFilter.value;
    return yearMatch && cityMatch && boroughMatch && schoolTypeMatch;
  });
}

function filterMovementData() {
  return dashboardData.movement.filter((item) => {
    const yearMatch = getSelectedYear() === "all" || item.year === getSelectedYear();
    const cityMatch = cityFilter.value === "all" || item.city === cityFilter.value;
    return yearMatch && cityMatch;
  });
}

function filterOnboardingData() {
  return dashboardData.onboarding.filter((item) => {
    const yearMatch = getSelectedYear() === "all" || item.year === getSelectedYear();
    const cityMatch = cityFilter.value === "all" || item.city === cityFilter.value;
    return yearMatch && cityMatch;
  });
}

function filterMuseumData() {
  return dashboardData.museums.filter((item) => {
    const yearMatch = getSelectedYear() === "all" || item.year === getSelectedYear();
    return yearMatch;
  });
}

function sumValues(data, key = "value") {
  return data.reduce((acc, item) => acc + item[key], 0);
}

function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const groupKey = item[key];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});
}

function getEnrollmentSummary() {
  const filtered = filterEnrollmentData();
  const grouped = groupBy(filtered, "borough");

  const boroughSummary = Object.keys(grouped).map((borough) => {
    const total = sumValues(grouped[borough]);
    return { borough, total };
  });

  boroughSummary.sort((a, b) => b.total - a.total);

  const totalEnrollment = sumValues(boroughSummary, "total");

  return {
    totalEnrollment,
    boroughSummary: boroughSummary.map((row) => ({
      ...row,
      share: totalEnrollment > 0 ? (row.total / totalEnrollment) * 100 : 0
    }))
  };
}

function getMovementSummary() {
  const filtered = filterMovementData();
  const grouped = groupBy(filtered, "month");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const monthly = months.map((month) => ({
    month,
    total: grouped[month] ? sumValues(grouped[month]) : 0
  }));

  const peak = monthly.reduce((max, item) => (item.total > max.total ? item : max), { month: "", total: 0 });
  const annualTotal = sumValues(monthly, "total");

  return { monthly, peak, annualTotal };
}

function getOnboardingSummary() {
  const filtered = filterOnboardingData();
  const grouped = groupBy(filtered, "status");

  const completed = grouped.Completed ? sumValues(grouped.Completed) : 0;
  const delayed = grouped.Delayed ? sumValues(grouped.Delayed) : 0;
  const escalated = grouped.Escalated ? sumValues(grouped.Escalated) : 0;

  return { completed, delayed, escalated };
}

function getMuseumSummary() {
  const filtered = filterMuseumData();
  const grouped = groupBy(filtered, "city");

  const nyc = grouped.NYC ? sumValues(grouped.NYC, "visitors") : 0;
  const chicago = grouped.Chicago ? sumValues(grouped.Chicago, "visitors") : 0;

  let diffPercent = 0;
  if (chicago > 0) {
    diffPercent = ((nyc - chicago) / chicago) * 100;
  }

  return { nyc, chicago, diffPercent };
}

function updateKPIs() {
  const enrollmentSummary = getEnrollmentSummary();
  const movementSummary = getMovementSummary();
  const onboardingSummary = getOnboardingSummary();
  const museumSummary = getMuseumSummary();

  document.getElementById("kpiEnrollment").textContent = formatNumber(enrollmentSummary.totalEnrollment);
  document.getElementById("kpiEnrollmentMeta").textContent = "Selected enrollment total";

  document.getElementById("kpiMovement").textContent = formatNumber(movementSummary.annualTotal);
  document.getElementById("kpiMovementMeta").textContent = `Peak in ${movementSummary.peak.month}`;

  document.getElementById("kpiOnboarding").textContent = formatPercent(onboardingSummary.completed);
  document.getElementById("kpiOnboardingMeta").textContent =
    `${onboardingSummary.delayed}% delayed, ${onboardingSummary.escalated}% escalated`;

  const citySelection = cityFilter.value;
  let museumValue = museumSummary.nyc;
  let museumMeta = "Visitors in NYC";

  if (citySelection === "Chicago") {
    museumValue = museumSummary.chicago;
    museumMeta = "Visitors in Chicago";
  } else if (citySelection === "all") {
    museumValue = museumSummary.nyc + museumSummary.chicago;
    museumMeta = "Visitors across both cities";
  }

  document.getElementById("kpiMuseum").textContent = formatNumber(museumValue);
  document.getElementById("kpiMuseumMeta").textContent = museumMeta;
}

function updateInsights() {
  const enrollmentSummary = getEnrollmentSummary();
  const movementSummary = getMovementSummary();
  const onboardingSummary = getOnboardingSummary();
  const museumSummary = getMuseumSummary();

  const topBorough = enrollmentSummary.boroughSummary[0];
  const museumLeadCity = museumSummary.nyc >= museumSummary.chicago ? "NYC" : "Chicago";
  const museumGap = Math.abs(museumSummary.diffPercent);

  const insights = [];

  if (topBorough) {
    insights.push(
      `${topBorough.borough} has the highest enrollment (${formatNumber(topBorough.total)} students), representing ${topBorough.share.toFixed(0)}% of the selected total.`
    );
  }

  if (movementSummary.peak.month) {
    insights.push(
      `Student movement peaks in ${movementSummary.peak.month}, suggesting a seasonal transfer period before summer.`
    );
  }

  insights.push(
    `Teacher onboarding completion is ${onboardingSummary.completed}%, while ${onboardingSummary.delayed + onboardingSummary.escalated}% of cases are delayed or escalated.`
  );

  insights.push(
    `${museumLeadCity} museum attendance is approximately ${museumGap.toFixed(0)}% higher than the comparison city.`
  );

  const list = document.getElementById("keyInsightsList");
  list.innerHTML = "";
  insights.forEach((insight) => {
    const li = document.createElement("li");
    li.textContent = insight;
    list.appendChild(li);
  });
}

function updateEnrollmentTable() {
  const { boroughSummary } = getEnrollmentSummary();
  const body = document.getElementById("boroughTableBody");
  body.innerHTML = "";

  boroughSummary.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.borough}</td>
      <td>${formatNumber(row.total)}</td>
      <td>${row.share.toFixed(0)}%</td>
    `;
    body.appendChild(tr);
  });
}

function createOrUpdateMuseumChart() {
  const museumSummary = getMuseumSummary();
  const ctx = document.getElementById("museumChart");

  const data = {
    labels: ["NYC", "Chicago"],
    datasets: [
      {
        label: "Museum Visitors",
        data: [museumSummary.nyc, museumSummary.chicago],
        borderWidth: 1
      }
    ]
  };

  if (museumChart) museumChart.destroy();

  museumChart = new Chart(ctx, {
    type: "bar",
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => ` ${formatNumber(context.raw)} visitors`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => formatNumber(value)
          }
        }
      }
    }
  });

  const badge = document.getElementById("museumComparisonBadge");
  const insight = document.getElementById("museumInsight");

  const leadingCity = museumSummary.nyc >= museumSummary.chicago ? "NYC" : "Chicago";
  badge.textContent = `${leadingCity} leads`;

  insight.textContent =
    `Museum attendance comparison shows that NYC receives about ${Math.abs(museumSummary.diffPercent).toFixed(0)}% more visitors than Chicago, indicating stronger cultural traffic and visitor demand.`;
}

function createOrUpdateOnboardingChart() {
  const summary = getOnboardingSummary();
  const ctx = document.getElementById("onboardingChart");

  const data = {
    labels: ["Completed", "Delayed", "Escalated"],
    datasets: [
      {
        label: "Onboarding Status",
        data: [summary.completed, summary.delayed, summary.escalated],
        borderWidth: 1
      }
    ]
  };

  if (onboardingChart) onboardingChart.destroy();

  onboardingChart = new Chart(ctx, {
    type: "doughnut",
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        },
        tooltip: {
          callbacks: {
            label: (context) => ` ${context.label}: ${context.raw}%`
          }
        }
      }
    }
  });

  document.getElementById("onboardingInsight").textContent =
    `Teacher compliance completion is ${summary.completed}%, while ${summary.delayed}% of cases are delayed and ${summary.escalated}% require escalation. This suggests a need for stronger onboarding monitoring.`;
}

function createOrUpdateEnrollmentChart() {
  const summary = getEnrollmentSummary();
  const ctx = document.getElementById("enrollmentChart");

  const data = {
    labels: summary.boroughSummary.map((item) => item.borough),
    datasets: [
      {
        label: "Enrollment",
        data: summary.boroughSummary.map((item) => item.total),
        borderWidth: 1
      }
    ]
  };

  if (enrollmentChart) enrollmentChart.destroy();

  enrollmentChart = new Chart(ctx, {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => ` ${formatNumber(context.raw)} students`
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: (value) => formatNumber(value)
          }
        }
      }
    }
  });
}

function createOrUpdateMovementChart() {
  const summary = getMovementSummary();
  const ctx = document.getElementById("movementChart");

  const data = {
    labels: summary.monthly.map((item) => item.month),
    datasets: [
      {
        label: "Student Movement",
        data: summary.monthly.map((item) => item.total),
        fill: false,
        tension: 0.3,
        borderWidth: 3
      }
    ]
  };

  if (movementChart) movementChart.destroy();

  movementChart = new Chart(ctx, {
    type: "line",
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => ` ${formatNumber(context.raw)} transfers`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => formatNumber(value)
          }
        }
      }
    }
  });

  document.getElementById("movementInsight").textContent =
    `Peak student movement occurs in ${summary.peak.month}, with ${formatNumber(summary.peak.total)} recorded movements. This late-spring spike may reflect school transfer activity before summer.`;
}

function updateDashboard() {
  updateKPIs();
  updateInsights();
  updateEnrollmentTable();
  createOrUpdateMuseumChart();
  createOrUpdateOnboardingChart();
  createOrUpdateEnrollmentChart();
  createOrUpdateMovementChart();
}

[yearFilter, cityFilter, boroughFilter, schoolTypeFilter].forEach((filter) => {
  filter.addEventListener("change", updateDashboard);
});

updateDashboard();
