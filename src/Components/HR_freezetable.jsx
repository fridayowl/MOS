import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const [showMonitoring, setShowMonitoring] = useState(false);
  const riskDomains = ["Domain1", "Domain2", "Domain3"];
  const riskOccurrence=["UnLikely","Very Likely","Could Happen"]
  const impactOnCIA =["High","Medium","Low"]
  const existingcontrolControlType=["Manual" ,"Automated"]
  const [tableData, setTableData] = useState([
    // Dummy row data
    {
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
    },
    {
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
        ImpactOnCIA: "High ",
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
        ExpectedClosedDate: "10 May 22",
        RiskStatus: "Managed",
        Remarks: "Performing BGV's for Intern from May 2022 joiners onwards\n31st May 2022 - VT - Verified samples which demonstrate the risk has been closed"
      }
    }
    // Add more dictionaries as needed
  ]);

  const toggleAssessment = () => {
    setShowAssessment(!showAssessment);
  };

  const toggleControl = () => {
    setShowControl(!showControl);
  };

  const toggleMonitoring = () => {
    setShowMonitoring(!showMonitoring);
  };

  const assessmentColSpan = showAssessment ? 4 : 0;
  const controlColSpan = showControl ? 11 : 0;
  const monitoringColSpan = showMonitoring ? 3 : 0;

 

  const handleRiskChange = (event, index,type) => {
    const updatedTableData = [...tableData];
    switch (type){
        case "RiskDomain":
        updatedTableData[index].RiskIdentification.RiskDomain = event.target.value;
        break;
        case "LikelihoodOfRiskOccurrence" :
        updatedTableData[index].RiskAssessment.LikelihoodOfRiskOccurrence = event.target.value;
        break ;
        case "ImpactOnCIA":
        updatedTableData[index].RiskAssessment.ImpactOnCIA= event.target.value;  
        break;    
        case "ExisitngControlType":
        updatedTableData[index].RiskControl.ControlType= event.target.value;  
        break;    
        default:
        break;
   
    } 
    setTableData(updatedTableData);
  };

  return (
    <div>
      <div className="section-buttons">
        <button onClick={toggleAssessment}>
          {showAssessment ? 'Hide Risk Assessment' : 'Show Risk Assessment'}
        </button>
        <button onClick={toggleControl}>
          {showControl ? 'Hide Risk Control' : 'Show Risk Control'}
        </button>
        <button onClick={toggleMonitoring}>
          {showMonitoring ? 'Hide Risk Monitoring' : 'Show Risk Monitoring'}
        </button>
      </div>
      <table className="risk-table">
        <thead>
          <tr>
            <th colSpan="5">Risk Identification</th>
            {showAssessment && <th colSpan={assessmentColSpan}>Risk Assessment</th>}
            {showControl && <th colSpan={controlColSpan}>Risk Control</th>}
            {showMonitoring && <th colSpan={monitoringColSpan}>Risk Monitoring</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Risk ID</th>
            <th>Risk Domain</th>
            <th>Risk Statement</th>
            <th>Risk Owner</th>
            <th>Risk Identification Date</th>
            {showAssessment && (
              <>
                <th>Risk Consequences</th>
                <th>Likelihood of the Risk Occurrence</th>
                <th>Impact on CIA</th>
                <th>Inherent Risk Severity</th>
              </>
            )}
            {showControl && (
              <>
                <th>Existing Controls</th>
                <th>Control Type</th>
                <th>Nature of Control</th>
                <th>Residual Risk Severity</th>
                <th>Risk Treatment</th>
                <th>ISO 27001 Mapping</th>
                <th>Planned Controls</th>
                <th>PlannedControlType</th> 
                <th>PlannedNatureOfControl</th>
                <th>ResidualRiskValueAfterPlannedControl</th>
              </>
            )}
            {showMonitoring && (
              <>
                <th>Expected Closed Date</th>
                <th>Risk Status</th>
                <th>Remarks</th>
              </>
            )}
          </tr>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.RiskIdentification.RiskID}</td>
              <td>
                <select
                  value={data.RiskIdentification.RiskDomain}
                  className="select-dropdown"
                  onChange={(event) => handleRiskChange(event, index,"RiskDomain")}
                >
                  {riskDomains.map((domain, index) => (
                    <option key={index} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </td>
              <td>{data.RiskIdentification.RiskStatement}</td>
              <td>{data.RiskIdentification.RiskOwner}</td>
              <td>{data.RiskIdentification.RiskIdentificationDate}</td>
              {showAssessment && (
                <>
                  <td>{data.RiskAssessment.RiskConsequences}</td> 
                  <td>
                     <select
                   value={data.RiskAssessment.LikelihoodOfRiskOccurrence}
                   className="select-dropdown"
                   onChange={(event) => handleRiskChange(event, index,"LikelihoodOfRiskOccurrence")}>
                    {riskOccurrence.map((occurance, index) => (
                        <option key={index} value={occurance}>
                        {occurance}
                        </option>
                    ))}
                </select>
                  </td>
                 <td>
                <select
                   value={data.RiskAssessment.ImpactOnCIA}
                   className="select-dropdown"
                   onChange={(event) => handleRiskChange(event, index,"ImpactOnCIA")}>
                    {impactOnCIA.map((impactoncia, index) => (
                        <option key={index} value={impactoncia}>
                        {impactoncia}
                        </option>
                    ))}
                </select>
                  </td>
                  <td>{data.RiskAssessment.InherentRiskSeverity}</td>
                </>
              )}
              {showControl && (
                <>
                  <td>{data.RiskControl.ExistingControls}</td> 
                   <td>
                    <select
                   value={data.RiskControl.ControlType}
                   className="select-dropdown"
                   onChange={(event) => handleRiskChange(event, index,"ExisitngControlType")}>
                    {existingcontrolControlType.map((exisitngcontroltype, index) => (
                        <option key={index} value={exisitngcontroltype}>
                        {exisitngcontroltype}
                        </option>
                    ))}
                     </select>
                  </td>
                  <td>{data.RiskControl.NatureOfControl}</td>
                  <td>{data.RiskControl.ResidualRiskSeverity}</td>
                  <td>{data.RiskControl.RiskTreatment}</td>
                  <td>{data.RiskControl.ISO27001Mapping}</td>
                  <td>{data.RiskControl.PlannedControls}</td>
                  <td>{data.RiskControl.PlannedControlType}</td>
                  <td>{data.RiskControl.PlannedNatureOfControl}</td>
                  <td>{data.RiskControl.ResidualRiskValueAfterPlannedControl}</td>
                </>
              )}
              {showMonitoring && (
                <>
                  <td>{data.RiskMonitoring.ExpectedClosedDate}</td>
                  <td>{data.RiskMonitoring.RiskStatus}</td>
                  <td>{data.RiskMonitoring.Remarks}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
