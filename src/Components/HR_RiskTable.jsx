import React, { useState } from 'react';
import '../style/RiskTable.scss';

const HR_RiskTable = ({ risks }) => {
  const [editedRisks, setEditedRisks] = useState(risks);

  const handleRiskStatementChange = (e, index) => {
    const newRisks = [...editedRisks];
    newRisks[index]['Risk Statement'] = e.target.value;
    setEditedRisks(newRisks);
    localStorage.setItem('Risk_HRTable.json', JSON.stringify(newRisks));
  };

  return (
    <table className="risk-table">
      <thead>
        <tr>
          <th>Risk ID</th>
          <th>Risk Domain</th>
          <th>Risk Statement</th>
          <th>Risk Consequences</th>
          <th>Likelihood of the risk Occurrence</th>
          <th>Impact on CIA</th>
          <th>Inherent Risk Severity</th>
          <th>Existing Controls</th>
          <th>Control Type</th>
          <th>Nature of Control</th>
          <th>Residual Risk Severity</th>
          <th>Risk Treatment</th>
          <th>Risk Owner</th>
          <th>ISO 27001 Mapping</th>
          <th>Risk Identification Date</th>
          <th>Risk Status</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {editedRisks.map((risk, index) => (
          <tr key={risk['Risk ID']}>
            <td>{risk['Risk ID']}</td>
            <td>{risk['Risk Domain']}</td>
            <td>
              <input
                type="text"
                value={risk['Risk Statement']}
                maxLength={50}
                onChange={(e) => handleRiskStatementChange(e, index)}
              />
            </td>
            <td>{risk['Risk Consequences']}</td>
            <td>{risk['Likelihood of the risk Occurrence']}</td>
            <td>{risk['Impact on CIA']}</td>
            <td>{risk['Inherent Risk Severity']}</td>
            <td>{risk['Existing Controls']}</td>
            <td>{risk['Control Type']}</td>
            <td>{risk['Nature of Control']}</td>
            <td>{risk['Residual Risk Severity']}</td>
            <td>{risk['Risk Treatment']}</td>
            <td>{risk['Risk Owner']}</td>
            <td>{risk['ISO 27001 Mapping']}</td>
            <td>{risk['Risk Identification Date']}</td>
            <td>{risk['Risk Status']}</td>
            <td>{risk['Remarks']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HR_RiskTable;
