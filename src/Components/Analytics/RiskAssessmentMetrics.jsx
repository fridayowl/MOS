import React from "react";
import { Radar } from "react-chartjs-2";

const RiskAssessmentMetrics = ({risks}) => {
  
  // Extracting Impact on CIA values from the risks
  const impactValues = risks.map((risk) => risk.RiskAssessment.ImpactOnCIA);

  // Counting the occurrences of each impact value
  const countValues = impactValues.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});

  // Radar chart data
  const data = {
    labels: ["Confidentiality", "Integrity", "Availability"],
    datasets: [
      {
        label: "Impact on CIA",
        data: [
          countValues["Low"] || 0,
          countValues["Medium"] || 0,
          countValues["High"] || 0,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Radar chart options
  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return (
    <div>
      <h2>Risk Assessment Metrics</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RiskAssessmentMetrics;
