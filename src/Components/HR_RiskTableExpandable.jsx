import React, { useState } from 'react';
import '../style/RiskTable.scss';

const HR_RiskTable = ({ risks }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [editableRiskId, setEditableRiskId] = useState(null);
  const [riskStatementValue, setRiskStatementValue] = useState('');
  const [editableRiskConsequencesId, setEditableRiskConsequencesId] = useState(null);
  const [riskConsequencesValue, setRiskConsequencesValue] = useState('');
  const [editableLikelihoodId, setEditableLikelihoodId] = useState(null);
  const [likelihoodValue, setLikelihoodValue] = useState('');

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

  const handleRiskStatementEdit = (riskId, riskStatement) => {
    setEditableRiskId(riskId);
    setRiskStatementValue(riskStatement);
  };

  const handleRiskStatementSave = (riskId) => {
    const updatedRisk = risks.find((risk) => risk['Risk ID'] === riskId);
    if (updatedRisk) {
      updatedRisk['Risk Statement'] = riskStatementValue;
    }

    setEditableRiskId(null);
    setRiskStatementValue('');
  };

  const handleRiskConsequencesEdit = (riskId, riskConsequences) => {
    setEditableRiskConsequencesId(riskId);
    setRiskConsequencesValue(riskConsequences);
  };

  const handleRiskConsequencesSave = (riskId) => {
    const updatedRisk = risks.find((risk) => risk['Risk ID'] === riskId);
    if (updatedRisk) {
      updatedRisk['Risk Consequences'] = riskConsequencesValue;
    }

    setEditableRiskConsequencesId(null);
    setRiskConsequencesValue('');
  };

   const handleLikelihoodEdit = (riskId, likelihood) => {
    setEditableLikelihoodId(riskId);
    setLikelihoodValue(likelihood);
  };

  const handleLikelihoodSave = (riskId) => {
    const updatedRisk = risks.find((risk) => risk['Risk ID'] === riskId);
    if (updatedRisk) {
      updatedRisk['Likelihood of the risk Occurrence'] = likelihoodValue;
    }

    setEditableLikelihoodId(null);
    setLikelihoodValue('');
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
        </tr>
      </thead>
      <tbody>
        {risks.map((risk, index) => (
          <React.Fragment key={risk['Risk ID']}>
            <tr>
              <td onClick={() => toggleRow(index)}>{risk['Risk ID']}</td>
              <td>{risk['Risk Domain']}</td>
              <td>
                {editableRiskId === risk['Risk ID'] ? (
                  <input
                    type="text"
                    value={riskStatementValue}
                    onChange={(e) => setRiskStatementValue(e.target.value)}
                    onBlur={() => handleRiskStatementSave(risk['Risk ID'])}
                  />
                ) : (
                  <span onClick={() => handleRiskStatementEdit(risk['Risk ID'], risk['Risk Statement'])}>
                    {risk['Risk Statement']}
                  </span>
                )}
              </td>
              <td>
                {editableRiskConsequencesId === risk['Risk ID'] ? (
                  <input
                    type="text"
                    value={riskConsequencesValue}
                    onChange={(e) => setRiskConsequencesValue(e.target.value)}
                    onBlur={() => handleRiskConsequencesSave(risk['Risk ID'])}
                  />
                ) : (
                  <span onClick={() => handleRiskConsequencesEdit(risk['Risk ID'], risk['Risk Consequences'])}>
                    {risk['Risk Consequences']}
                  </span>
                )}
              </td>
               <td>
                {editableLikelihoodId === risk['Risk ID'] ? (
                  <select
                    value={likelihoodValue}
                    onChange={(e) => setLikelihoodValue(e.target.value)}
                    onBlur={() => handleLikelihoodSave(risk['Risk ID'])}
                  >
                    <option value="likely">Likely</option>
                    <option value="most_likely">Most Likely</option>
                    <option value="very_likely">Very Likely</option>
                  </select>
                ) : (
                  <span onClick={() => handleLikelihoodEdit(risk['Risk ID'], risk['Likelihood of the risk Occurrence'])}>
                    {risk['Likelihood of the risk Occurrence']}
                  </span>
                )}
              </td>
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
