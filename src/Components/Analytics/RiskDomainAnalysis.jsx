import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"; 
import { Bar } from 'react-chartjs-2';



const RiskDomainAnalysis = ({ risks }) => {
  const riskDomainCounts = risks.reduce((counts, risk) => {
    const { RiskDomain } = risk.RiskIdentification;
    counts[RiskDomain] = counts[RiskDomain] || {};

    const { RiskMonitoring } = risk;
    const status = RiskMonitoring.RiskStatus;
    counts[RiskDomain][status] = (counts[RiskDomain][status] || 0) + 1;

    return counts;
  }, {});

  const riskDomains = Object.keys(riskDomainCounts);
  const riskStatus = ['Managed', 'UnManaged', 'UnderReview', 'Open', 'Closed', 'Below Risk Appetite'];

  const colors = [
    'rgba(63, 81, 181, 0.6)',
    'rgba(255, 152, 0, 0.6)',
    'rgba(156, 39, 176, 0.6)',
    'rgba(33, 150, 243, 0.6)',
    'rgba(0, 150, 136, 0.6)',
    'rgba(255, 87, 34, 0.6)',
  ];

  const data = {
    labels: riskDomains,
    datasets: riskStatus.map((status, index) => ({
      label: status,
      data: riskDomains.map((domain) => riskDomainCounts[domain][status] || 0),
      backgroundColor: colors[index % colors.length],
    })),
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: true,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          precision: 0,
          stepSize: 1,
        },
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="App">
      <h1>Risk Domain Analysis</h1>
      <div style={{ maxWidth: '650px' }}>
        <Bar data={data} type="bar" height={400} options={options} />
      </div>
    </div>
  );
};

export default RiskDomainAnalysis;