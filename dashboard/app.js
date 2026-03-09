window.addEventListener("load", function () {
  const museumVisitorsCtx = document.getElementById("museumVisitorsChart");
  const onboardingStatusCtx = document.getElementById("onboardingStatusChart");
  const enrollmentCtx = document.getElementById("enrollmentChart");
  const movementTrendCtx = document.getElementById("movementTrendChart");

  if (!museumVisitorsCtx || !onboardingStatusCtx || !enrollmentCtx || !movementTrendCtx) {
    console.error("One or more canvas elements were not found.");
    return;
  }

  new Chart(museumVisitorsCtx, {
    type: "bar",
    data: {
      labels: ["NYC", "Chicago"],
      datasets: [
        {
          label: "Total Visitors",
          data: [95200, 73150],
          backgroundColor: ["#7cc3f2", "#7cc3f2"],
          borderColor: ["#5aa9dc", "#5aa9dc"],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(onboardingStatusCtx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Late", "Escalated"],
      datasets: [
        {
          data: [68, 22, 10],
          backgroundColor: ["#3b82f6", "#f43f5e", "#f59e0b"],
          borderColor: "#ffffff",
          borderWidth: 2,
          hoverOffset: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "58%",
      layout: {
        padding: {
          top: 6,
          bottom: 6,
          left: 6,
          right: 6
        }
      },
      plugins: {
        legend: {
          position: "bottom",
          align: "center",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 8,
            boxHeight: 8,
            padding: 14,
            font: {
              size: 11,
              weight: "600",
              family: "Arial"
            },
            color: "#374151"
          }
        }
      }
    }
  });

  new Chart(enrollmentCtx, {
    type: "bar",
    data: {
      labels: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
      datasets: [
        {
          label: "Enrollment Records",
          data: [6900, 6400, 6100, 5600, 5000],
          backgroundColor: "#93c5fd",
          borderColor: "#60a5fa",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(movementTrendCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Students Moved",
          data: [1800, 1950, 2100, 2250, 2400, 2550, 2480, 2380, 2210, 2140, 2050, 1990],
          fill: false,
          tension: 0.3,
          borderColor: "#60a5fa",
          backgroundColor: "#60a5fa",
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
