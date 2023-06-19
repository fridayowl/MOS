import './App.css';
import HR_RiskTable from 'Components/HR_RiskTableExpandable';
import React, { useEffect, useState } from 'react';

const HR_ExpTest = () => {
   
   
  const risks = [
 {
      RiskIdentification: {
        RiskID: "RID-HR-001",
        RiskDomain: "Pre Employment",
        RiskStatement: "Background checks are not performed on interns",
        RiskOwner: "Mitalee",
        RiskIdentificationDate: "20/02/2022"
      },
      RiskAssessment: {
        RiskConsequences: "Interns with improper qualifications/police records may not be identified",
        LikelihoodOfRiskOccurrence: "Unlikely",
        ImpactOnCIA: "High Medium Low",
        InherentRiskSeverity: "Low"
      },
      RiskExitingControl: {
        ExistingControls: "No Control Required, The risk is managed (+)",
        ControlType: "Manual",
        NatureOfControl: "Awareness",
        ResidualRiskSeverity: "High",
        RiskTreatment: "Transfer",
        ISO27001Mapping: "A.7.1.1 Screening", 
      },
      RiskPlannedControls:{
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
    },
   {
      RiskIdentification: {
        RiskID: "RID-HR-001",
        RiskDomain: "Pre Employment",
        RiskStatement: "Background checks are not performed on interns",
        RiskOwner: "Mitalee",
        RiskIdentificationDate:"20/02/2022"
      },
      RiskAssessment: {
        RiskConsequences: "Interns with improper qualifications/police records may not be identified",
        LikelihoodOfRiskOccurrence: "Unlikely",
        ImpactOnCIA: "High Medium Low",
        InherentRiskSeverity: "Low"
      },
      RiskExitingControl: {
        ExistingControls: "No Control Required, The risk is managed (+)",
        ControlType: "Manual",
        NatureOfControl: "Awareness",
        ResidualRiskSeverity: "High",
        RiskTreatment: "Transfer",
        ISO27001Mapping: "A.7.1.1 Screening", 
      },
      RiskPlannedControls:{
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
    },
    {
      RiskIdentification: {
        RiskID: "RID-HR-001",
        RiskDomain: "Pre Employment",
        RiskStatement: "Background checks are not performed on interns",
        RiskOwner: "Mitalee",
        RiskIdentificationDate:"20/02/2022"
      },
      RiskAssessment: {
        RiskConsequences: "Interns with improper qualifications/police records may not be identified",
        LikelihoodOfRiskOccurrence: "Unlikely",
        ImpactOnCIA: "High Medium Low",
        InherentRiskSeverity: "Low"
      },
      RiskExitingControl: {
        ExistingControls: "No Control Required, The risk is managed (+)",
        ControlType: "Manual",
        NatureOfControl: "Awareness",
        ResidualRiskSeverity: "High",
        RiskTreatment: "Transfer",
        ISO27001Mapping: "A.7.1.1 Screening", 
      },
      RiskPlannedControls:{
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
    },
    {
      RiskIdentification: {
        RiskID: "RID-HR-001",
        RiskDomain: "Pre Employment",
        RiskStatement: "Background checks are not performed on interns",
        RiskOwner: "Mitalee",
        RiskIdentificationDate:"20/02/2022"
      },
      RiskAssessment: {
        RiskConsequences: "Interns with improper qualifications/police records may not be identified",
        LikelihoodOfRiskOccurrence: "Unlikely",
        ImpactOnCIA: "High Medium Low",
        InherentRiskSeverity: "Low"
      },
      RiskExitingControl: {
        ExistingControls: "No Control Required, The risk is managed (+)",
        ControlType: "Manual",
        NatureOfControl: "Awareness",
        ResidualRiskSeverity: "High",
        RiskTreatment: "Transfer",
        ISO27001Mapping: "A.7.1.1 Screening", 
      },
      RiskPlannedControls:{
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
    },
    {
      RiskIdentification: {
        RiskID: "RID-HR-001",
        RiskDomain: "Pre Employment",
        RiskStatement: "Background checks are not performed on interns",
        RiskOwner: "Mitalee",
        RiskIdentificationDate:"20/02/2022"
      },
      RiskAssessment: {
        RiskConsequences: "Interns with improper qualifications/police records may not be identified",
        LikelihoodOfRiskOccurrence: "Unlikely",
        ImpactOnCIA: "High Medium Low",
        InherentRiskSeverity: "Low"
      },
      RiskExitingControl: {
        ExistingControls: "No Control Required, The risk is managed (+)",
        ControlType: "Manual",
        NatureOfControl: "Awareness",
        ResidualRiskSeverity: "High",
        RiskTreatment: "Transfer",
        ISO27001Mapping: "A.7.1.1 Screening", 
      },
      RiskPlannedControls:{
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

]
 
 

  return (
    <div>
      <h1>Risk Table</h1> 
        <HR_RiskTable risk={risks} />
      
    </div>
  );
}

export default HR_ExpTest;
