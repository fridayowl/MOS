import React, { useState } from 'react';
import './Table.css';
import './style.css';

const HR_RiskTable = ({ risks }) => {
  const [expandedRisk, setExpandedRisk] = useState(null);

  const getTableHeaders = (header) => {
    if (risks.length === 0) return null;

    const riskKeys = Object.keys(risks[0][header]);
    return [
      ...riskKeys.map((key, index) => <th key={index}>{key}</th>),
      <th key="actions">Actions</th> // Added the actions column header
    ];
  };

  const handleButtonClick = (index) => {
    if (expandedRisk === index) {
      setExpandedRisk(null); // Collapse the expanded row if the same button is clicked again
    } else {
      setExpandedRisk(index);
    }
  };

  const handleCloseButtonClick = () => {
    setExpandedRisk(null);
  };

  const getTableRows = (header) => {
    return risks.map((risk, index) => (
      <React.Fragment key={index}>
        <tr>
          {Object.values(risk[header]).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
          <td>
            <button onClick={() => handleButtonClick(index)}>Expand</button>
          </td>
        </tr>
        {expandedRisk === index && (
          <tr className="expanded-row">
            <td colSpan={Object.keys(risk[header]).length + 1}>
              <table className="sub-table">
                <thead>
                  <tr>
                    {getTableHeaders('RiskAssessment', false).slice(0, -1)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(risk.RiskAssessment).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
        {expandedRisk === index && (
          <tr className="expanded-row">
            <td colSpan={Object.keys(risk[header]).length + 1}>
              <table className="sub-table">
                <thead>
                  <tr>
                    {getTableHeaders('RiskExitingControl', false).slice(0, -1)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(risk.RiskPlannedControls).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
        {expandedRisk === index && (
          <tr className="expanded-row">
            <td colSpan={Object.keys(risk[header]).length + 1}>
              <table className="sub-table">
                <thead>
                  <tr>
                    {getTableHeaders('RiskPlannedControls', false).slice(0, -1)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(risk.RiskPlannedControls).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
        {expandedRisk === index && (
          <tr className="expanded-row">
            <td colSpan={Object.keys(risk[header]).length + 1}>
              <table className="sub-table">
                <thead>
                  <tr>
                    {getTableHeaders('RiskMonitoring', false).slice(0, -1)}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(risk.RiskMonitoring).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <button onClick={handleCloseButtonClick}>Close</button>
            </td>
          </tr>
        )}
      </React.Fragment>
    ));
  };

  return (
    <table className="risk-table">
      <thead>
        <tr>{getTableHeaders('RiskIdentification')}</tr>
      </thead>
      <tbody>{getTableRows('RiskIdentification')}</tbody>
    </table>
  );
};

export default HR_RiskTable;
