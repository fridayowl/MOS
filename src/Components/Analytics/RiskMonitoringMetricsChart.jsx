import React from 'react';
import './RiskMonitoringMetrics.css';

const RiskMonitoringMetrics = ({ risks }) => {
  const currentDate = new Date();

  const risksWithClosureDates = risks.filter(
    (risk) => risk.RiskMonitoring && risk.RiskMonitoring.ExpectedClosedDate
  );

  const sortedRisks = risksWithClosureDates.sort((a, b) => {
    const dateA = new Date(a.RiskMonitoring.ExpectedClosedDate);
    const dateB = new Date(b.RiskMonitoring.ExpectedClosedDate);
    return dateA - dateB;
  });

  const closedRisks = sortedRisks.filter(
    (risk) => risk.RiskMonitoring.RiskStatus === 'Closed'
  );

  const openRisks = sortedRisks.filter(
    (risk) => risk.RiskMonitoring.RiskStatus !== 'Closed'
  );

  return (
    <div className="risk-monitoring-container">
      <h2 className="risk-monitoring-heading">Risk Monitoring Metrics</h2>

      <h3 className="section-heading">Expected Closure Dates</h3>
      <div className="scrollable-table">
        <table className="expected-closure-dates">
          <tbody>
            {sortedRisks.map((risk) => {
              const expectedClosureDate = new Date(risk.RiskMonitoring.ExpectedClosedDate);
              const isUpcoming = expectedClosureDate > currentDate;
              const isOverdue = expectedClosureDate < currentDate;
              const formattedDate = expectedClosureDate.toLocaleDateString();
              const statusStyle = isUpcoming
                ? { color: 'blue' }
                : isOverdue
                ? { color: 'red' }
                : {};

              return (
                <tr key={risk.RiskIdentification.RiskID}>
                  <td>{formattedDate}</td>
                  <td style={statusStyle}>{risk.RiskIdentification.RiskStatement}</td>
                  <td>Owner: {risk.RiskIdentification.RiskOwner}</td>
                  <td>
                    <button className="remind-button">Remind</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h3 className="section-heading">Summary</h3>
      <div className="summary">
        <p>Closed Risks: {closedRisks.length}</p>
        <p>Open Risks: {openRisks.length}</p>
      </div>
    </div>
  );
};

export default RiskMonitoringMetrics;
