import React from 'react';
import { Radar } from 'react-chartjs-2';

const RiskAssessmentMetrics = ({ risks }) => {
  // Extracting likelihood of risk occurrence and impact on CIA from each risk
  const likelihoodOfOccurrence = risks.map((risk) => risk.RiskAssessment.LikelihoodOfRiskOccurrence);
  const impactOnCIA = risks.map((risk) => risk.RiskAssessment.ImpactOnCIA);

  // Data for the Radar Chart
  const data = {
    labels: ['Risk 1', 'Risk 2', 'Risk 3', 'Risk 4', 'Risk 5'],
    datasets: [
      {
        label: 'Likelihood of Risk Occurrence',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: likelihoodOfOccurrence,
      },
      {
        label: 'Impact on CIA',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: impactOnCIA,
      },
    ],
  };

  return (
    <div>
      <h2>Risk Assessment Metrics</h2>
      <Radar data={data} />
    </div>
  );
};

export default RiskAssessmentMetrics;
