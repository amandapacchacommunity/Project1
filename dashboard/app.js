<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
const museumVisitorsCtx = document.getElementById("museumVisitorsChart");
const onboardingStatusCtx = document.getElementById("onboardingStatusChart");
const enrollmentCtx = document.getElementById("enrollmentChart");
const movementTrendCtx = document.getElementById("movementTrendChart");

new Chart(museumVisitorsCtx, {
  type: "bar",
  data: {
    labels: ["NYC", "Chicago"],
    datasets: [
      {
        label: "Total Visitors",
        data: [95200, 73150],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

new Chart(document.getElementById("onboardingStatusChart"), {
  type: "doughnut",
  data: {
    labels: ["Completed", "Late", "Escalated"],
    datasets: [{
      data: [68, 22, 10],
      backgroundColor: [
        "#3b82f6",
        "#f59e0b",
        "#ef4444"
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 15,
          padding: 12,
          font: {
            size: 12
          }
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
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
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
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true
  }
});
