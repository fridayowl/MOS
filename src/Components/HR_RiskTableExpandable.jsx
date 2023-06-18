import React, { useState } from 'react';
import '../style/RiskTable.scss';

const HR_RiskTable = ({ risks }) => {
  const [expandedRows, setExpandedRows] = useState([]);  

  const toggleRow = (index) => {
    const currentIndex = expandedRows.indexOf(index);
    const newExpandedRows = [...expandedRows];

    if (currentIndex === -1) {
      newExpandedRows.push(index);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

 
  return (
    <table className="risk-table">
      <thead>
        <tr>
          <th>Risk ID</th>
          <th>Risk Domain</th>
          <th>Risk Statement</th>
          <th>Risk Consequences</th> 
        </tr>
      </thead>
      <tbody>
        {risks.map((risk, index) => (
          <React.Fragment key={risk['Risk ID']}>
            <tr>
              <td onClick={() => toggleRow(index)}>{risk['Risk ID']}</td>
              <td>{risk['Risk Domain']}</td>
              <td>{risk['Impact on CIA']}</td>
              <td>{risk['Inherent Risk Severity']}</td>
            </tr>
  {expandedRows.includes(index) && (
              <>
                <tr className="controls-row">
                  <td colSpan={7}>
                    <h4>Existing Controls</h4>
                    <table className="controls-table">
                      <thead>
                        <tr>
                          <th>Control Type</th>
                          <th>Nature of Control</th>
                          <th>Residual Risk Severity</th>
                          <th>Risk Treatment</th>
                          <th>Risk Owner</th>
                          <th>ISO 27001 Mapping</th>
                          <th>Risk Identification Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{risk.Controls[0]['Control Type']}</td>
                          <td>{risk.Controls[0]['Nature of Control']}</td>
                          <td>{risk.Controls[0]['Residual Risk Severity']}</td>
                          <td>{risk.Controls[0]['Risk Treatment']}</td>
                          <td>{risk.Controls[0]['Risk Owner']}</td>
                          <td>{risk.Controls[0]['ISO 27001 Mapping']}</td>
                          <td>{risk.Controls[0]['Risk Identification Date']}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="controls-row">
                  <td colSpan={7}>
                    <h4>Planned Controls</h4>
                    <table className="controls-table">
                      <thead>
                        <tr>
                          <th>Control Type</th>
                          <th>Nature of Control</th>
                          <th>Residual Risk Value after Planned Control</th>
                          <th>Expected Closed Date</th>
                          <th>Risk Status</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{risk.Controls[1]['Control Type']}</td>
                          <td>{risk.Controls[1]['Nature of Control']}</td>
                          <td>{risk.Controls[1]['Residual Risk Value after Planned Control']}</td>
                          <td>{risk.Controls[1]['Expected Closed Date']}</td>
                          <td>{risk.Controls[1]['Risk Status']}</td>
                          <td>{risk.Controls[1]['Remarks']}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default HR_RiskTable;
