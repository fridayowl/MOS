import React, { useState } from 'react';

const ExpandableTable = ({ data }) => {
  const [expandedRiskId, setExpandedRiskId] = useState(null);

  const handleRowClick = (riskId) => {
    if (expandedRiskId === riskId) {
      setExpandedRiskId(null);
    } else {
      setExpandedRiskId(riskId);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Risk ID</th>
          <th>Risk Domain</th>
          <th>Risk Statement</th>
          <th>Risk Owner</th>
          <th>Risk Identification Date</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => {
          const {
            RiskID,
            RiskDomain,
            RiskStatement,
            RiskOwner,
            RiskIdentificationDate,
          } = data[key].RiskIdentification;

          return (
            <React.Fragment key={RiskID}>
              <tr onClick={() => handleRowClick(RiskID)}>
                <td>{RiskID}</td>
                <td>{RiskDomain}</td>
                <td>{RiskStatement}</td>
                <td>{RiskOwner}</td>
                <td>{RiskIdentificationDate}</td>
              </tr>
              {expandedRiskId === RiskID && (
                <tr>
                  <td colSpan="5">
                    <table>
                      <tbody>
                        <tr>
                          <td>Risk Consequences:</td>
                          <td>{data[key].RiskAssessment.RiskConsequences}</td>
                        </tr>
                        <tr>
                          <td>Likelihood of Risk Occurrence:</td>
                          <td>{data[key].RiskAssessment.LikelihoodOfRiskOccurrence}</td>
                        </tr>
                        <tr>
                          <td>Impact on CIA:</td>
                          <td>{data[key].RiskAssessment.ImpactOnCIA}</td>
                        </tr>
                        <tr>
                          <td>Inherent Risk Severity:</td>
                          <td>{data[key].RiskAssessment.InherentRiskSeverity}</td>
                        </tr>
                        {/* Render other columns from RiskControl and RiskMonitoring */}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

const Table1 = () => {
  const data = {
    RiskIdentification: {
      RiskID: "RID-HR-001",
      RiskDomain: "Pre Employment",
      RiskStatement: "Background checks are not performed on interns",
      RiskOwner: "Mitalee",
      RiskIdentificationDate: "20 March 2022"
    },
    RiskAssessment: {
      RiskConsequences: "Interns with improper qualifications/police records may not be identified",
      LikelihoodOfRiskOccurrence: "Unlikely",
      ImpactOnCIA: "High Medium Low",
      InherentRiskSeverity: "Low"
    },
    RiskControl: {
      ExistingControls: "No Control Required, The risk is managed (+)",
      ControlType: "Manual",
      NatureOfControl: "Awareness",
      ResidualRiskSeverity: "High",
      RiskTreatment: "Transfer",
      ISO27001Mapping: "A.7.1.1 Screening", 
      PlannedControls: "Effective 1st May Interns will be added for BGV",    
      PlannedControlType: "Manual",
      PlannedNatureOfControl: "Preventive",
      ResidualRiskValueAfterPlannedControl: "#REF!",
    },
    RiskMonitoring: {
      ControlType: "Manual",
      NatureOfControl: "Preventive",
      ResidualRiskValueAfterPlannedControl: "#REF!",
      ExpectedClosedDate: "10 May 22",
      RiskStatus: "Managed",
      Remarks: "Performing BGV's for Intern from May 2022 joiners onwards\n31st May 2022 - VT - Verified samples which demonstrate the risk has been closed"
    }
  };

  return (
    <div>
      <h1>Expandable Table</h1>
      <ExpandableTable data={data} />
    </div>
  );
};

export default Table1;
