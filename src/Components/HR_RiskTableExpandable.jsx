import React, { useState } from 'react';
import './Table.css';
import './style.css';

const HR_RiskTable = ({ risk }) => {


  const riskDomains = ["Domain1", "Domain2", "Domain3"];
  const riskOccurrence=["UnLikely","Very Likely","Could Happen"]
  const impactOnCIA =["High","Medium","Low"]
  const existingcontrolControlType=["Manual" ,"Automated"]
  const existingnatureOfControlOptions=["Preventive" ,"Detective","Recovery","Awareness"]
  const existingriskTreatmentOptions=["Accept" ,"Mitigate","Avoid","Transfer"]
  const plannedcontrolControlType=["Manual" ,"Automated"]
  const plannednatureOfControlOptions=["Preventive" ,"Detective","Recovery","Awareness"]
  const [risks, setRisks] = useState(risk)



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


  const handleChange = (index, value,type ) => {
   console.log("changed",type,value)
    const updatedRisks = [...risks];
    switch(type){
      case "RiskDomain":
      updatedRisks[index].RiskIdentification.RiskDomain = value;
      break 
      case "LikelihoodOfRiskOccurrence":
      updatedRisks[index].RiskAssessment.LikelihoodOfRiskOccurrence = value;
      console.log("changed",type,value)
      break ;
      case "ImpactOnCIA" :
      updatedRisks[index].RiskAssessment.ImpactOnCIA = value;
      break;
      case "ExisitingControlType" :
         updatedRisks[index].RiskExitingControl.ControlType= value;
      break ;
      case "ExisitingNatureOfControl" :
         updatedRisks[index].RiskExitingControl.NatureOfControl= value;
      break;
      case "ExisitingRiskTreatment" :
         updatedRisks[index].RiskExitingControl.RiskTreatment= value;
      break;
       case "PlannedControlType" :
         updatedRisks[index].RiskPlannedControls.PlannedControlType= value;
      break ;
      case "PlannedControlType" :
         updatedRisks[index].RiskPlannedControls.PlannedControlType= value;
      break ;
      default:
        break; 

    }
   
    setRisks(updatedRisks)
   
  };

  const getTableRows = (header) => {
    return risks.map((risk, index) => (
      <React.Fragment key={index}>
      <tr>
        {Object.entries(risk[header]).map(([key, value], innerIndex) => (
          <td key={innerIndex}>
            {key === 'RiskDomain' ? (
              <select
                className="select-dropdown"
                value={value}
                onChange={(e) => handleChange(index, e.target.value, "RiskDomain")}>
                {riskDomains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            ) : (
              value
            )}
          </td>
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
          <tr>{getTableHeaders('RiskAssessment', false).slice(0, -1)}</tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(risk.RiskAssessment).map(([key, value], innerindex1) => (
              <td key={innerindex1}>
                {key === 'LikelihoodOfRiskOccurrence' ? (
                  <select
                    className="select-dropdown"
                    value={value}
                    onChange={(e) =>
                      handleChange(index, e.target.value, 'LikelihoodOfRiskOccurrence')
                    }
                  >
                    {riskOccurrence.map((ocuurance) => (
                      <option key={ocuurance} value={ocuurance}>
                        {ocuurance}
                      </option>
                    ))}
                  </select>
                ) : key === 'ImpactOnCIA' ? (
                  <select
                    className="select-dropdown"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value, 'ImpactOnCIA')}
                  >
                    {impactOnCIA.map((impact) => (
                      <option key={impact} value={impact}>
                        {impact}
                      </option>
                    ))}
                  </select>
                ) : (
                  value
                )}
              </td>
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
          <tr>{getTableHeaders('RiskExitingControl', false).slice(0, -1)}</tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(risk.RiskExitingControl).map(([key, value], innerindex1) => (
              <td key={innerindex1}>
                {key === 'ControlType' || key === 'NatureOfControl' || key === 'RiskTreatment' ? (
                  <select
                    className="select-dropdown"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value, "Exisiting"+key)}
                  >
                    {key === 'ControlType' && existingcontrolControlType.map((controlType) => (
                      <option key={controlType} value={controlType}>
                        {controlType}
                      </option>
                    ))}
                    {key === 'NatureOfControl' && existingnatureOfControlOptions.map((controlOption) => (
                      <option key={controlOption} value={controlOption}>
                        {controlOption}
                      </option>
                    ))}
                    {key === 'RiskTreatment' && existingriskTreatmentOptions.map((treatmentOption) => (
                      <option key={treatmentOption} value={treatmentOption}>
                        {treatmentOption}
                      </option>
                    ))}
                  </select>
                ) : (
                  value
                )}
              </td>
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
          <tr>{getTableHeaders('RiskPlannedControls', false).slice(0, -1)}</tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(risk.RiskPlannedControls).map(([key, value], innerindex1) => (
              <td key={innerindex1}>
                {key === 'PlannedControlType' || key === 'PlannedNatureOfControl' ? (
                  <select
                    className="select-dropdown"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value, key)}
                  >
                    {key === 'PlannedControlType' && plannedcontrolControlType.map((controlType) => (
                      <option key={controlType} value={controlType}>
                        {controlType}
                      </option>
                    ))}
                    {key === 'PlannedNatureOfControl' && plannednatureOfControlOptions.map((controlOption) => (
                      <option key={controlOption} value={controlOption}>
                        {controlOption}
                      </option>
                    ))}
                  </select>
                ) : (
                  value
                )}
              </td>
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
