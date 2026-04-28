import React from "react";
import Chart from "react-apexcharts";

const BarChartAttendance = () => {
  const data = [45, 38, 50, 28, 42, 15]; // Mon → Sat

  return (
    <div style={styles.card}>
      <h4 style={styles.title}>Weekly Attendance Overview</h4>

      <Chart
        options={{
          chart: {
            toolbar: { show: false },
            sparkline: { enabled: false }
          },

          // Week labels
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            labels: {
              show: true,
              style: {
                colors: "#6b7280",
                fontSize: "12px"
              }
            }
          },

          // Clean UI
          yaxis: { show: false },
          grid: { show: false },

          // ❌ Remove values inside bars
          dataLabels: {
            enabled: false
          },

          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 6,
              distributed: true
            }
          },

          // Dynamic colors
          colors: data.map((val) =>
            val < 30 ? "#f59e0b" : "#16a34a"
          ),

          tooltip: {
            enabled: true
          },

          legend: {
            show: false // we use custom legend below
          }
        }}
        series={[{ data }]}
        type="bar"
        height={180}
      />

      {/* ✅ Custom Legend */}
      <div style={styles.legend}>
        <div style={styles.legendItem}>
          <span style={{ ...styles.dot, background: "#16a34a" }} />
          <span>Present</span>
        </div>

        <div style={styles.legendItem}>
          <span style={{ ...styles.dot, background: "#f59e0b" }} />
          <span>Low day</span>
        </div>
      </div>
    </div>
  );
};

export default BarChartAttendance;

const styles = {
  card: {
    width: "320px",
    background: "white",
    // padding: "16px",
    borderRadius: "12px",
    fontFamily: "sans-serif"
  },
  title: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#111827"
  },
  legend: {
    display: "flex",
    gap: "16px",
    marginTop: "10px",
    justifyContent : "center"
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#374151"
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "3px",
    display: "inline-block"
  }
};