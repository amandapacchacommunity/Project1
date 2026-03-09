window.addEventListener("load", function () {

  const museumVisitorsCtx = document.getElementById("museumVisitorsChart");
  const onboardingStatusCtx = document.getElementById("onboardingStatusChart");
  const enrollmentCtx = document.getElementById("enrollmentChart");
  const movementTrendCtx = document.getElementById("movementTrendChart");

  // Museum Visitors Chart
  new Chart(museumVisitorsCtx, {
    type: "bar",
    data: {
      labels: ["NYC", "Chicago"],
      datasets: [{
        label: "Total Visitors",
        data: [95200, 73150],
        backgroundColor: ["#7cc3f2", "#7cc3f2"],
        borderColor: ["#5aa9dc", "#5aa9dc"],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Teacher Onboarding Doughnut
  new Chart(onboardingStatusCtx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Late", "Escalated"],
      datasets: [{
        data: [68, 22, 10],
        backgroundColor: ["#3b82f6", "#f43f5e", "#f59e0b"],
        borderColor: "#ffffff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 8,
            padding: 14,
            font: {
              size: 11,
              weight: "600"
            }
          }
        }
      }
    }
  });

  // NYC Enrollment Chart
  new Chart(enrollmentCtx, {
    type: "bar",
    data: {
      labels: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
      datasets: [{
        label: "Enrollment Records",
        data: [6900, 6400, 6100, 5600, 5000],
        backgroundColor: "#93c5fd",
        borderColor: "#60a5fa",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Student Mobility Trend (more realistic seasonal pattern)
  new Chart(movementTrendCtx, {
    type: "line",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets: [{
        label: "Students Relocating",
        data: [420, 510, 650, 830, 1100, 1350, 1500, 1450, 980, 760, 600, 480],
        fill: true,
        tension: 0.35,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.15)",
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: "top" }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Students Moving"
          }
        }
      }
    }
  });

});
