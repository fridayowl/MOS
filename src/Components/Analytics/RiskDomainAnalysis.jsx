import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"; 
import { Bar } from 'react-chartjs-2';

const RiskDomainAnalysis = ({ risks }) => {
  // Count the number of risks in each risk domain
  const riskDomainCounts = risks.reduce((counts, risk) => {
    const { RiskDomain } = risk.RiskIdentification;
    counts[RiskDomain] = (counts[RiskDomain] || 0) + 1;
    return counts;
  }, {});

  // Extract the risk domains and their corresponding counts
  const riskDomains = Object.keys(riskDomainCounts);
  const riskCounts = Object.values(riskDomainCounts);

  const data = {
    labels: riskDomains,
    datasets: [
      {
        label: 'Number of Risks',
        data: riskCounts,
        backgroundColor: [
          'rgba(63, 81, 181, 0.6)',
          'rgba(255, 152, 0, 0.6)',
          'rgba(156, 39, 176, 0.6)',
          'rgba(33, 150, 243, 0.6)',
          'rgba(0, 150, 136, 0.6)',
          'rgba(255, 87, 34, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          stepSize: 1,
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="App">
      <h1>Risk Domain Analysis</h1>
      <div style={{ maxWidth: '650px' }}>
        <Bar data={data} height={400} options={options} />
      </div>
    </div>
  );
};
 

export default RiskDomainAnalysis;
