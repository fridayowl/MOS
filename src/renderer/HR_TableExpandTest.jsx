import './App.css';
import HR_RiskTable from 'Components/HR_RiskTableExpandable';
import React, { useEffect, useState } from 'react';

const HR_ExpTest = () => {
   
   
  const risks = [
  {
    "Risk ID": "RID-HR-001",
    "Risk Domain": "Pre Employment",
    "Risk Statement": "Background checks are not performed on interns",
    "Risk Consequences": "Interns with improper qualifications/police records may not be identified",
    "Likelihood of the risk Occurrence": "Very Likely",
    "Impact on CIA": "High Medium Low",
    "Inhereint Risk Severity": "Low/Medium/High",
    "Controls": [
      {
        "Existing Controls": "No Control Required, The risk is managed (+)",
        "Control Type": "Manual",
        "Nature of Control": "Recovery",
        "Residual Risk Severity": "High/Medium/Low",
        "Risk Treatment": "Accept",
        "Risk Owner": "Mitalee",
        "ISO 27001 Mapping": "A.7.1.1 Screening",
        "Risk Identification Date": "20 March 2022"
      },
      {
        "Planned Controls": "Effective 1st May Interns will be added for BGV",
        "Control Type": "Manual",
        "Nature of Control": "Preventive",
        "Residual Risk Value after Planned Control": "4",
        "Expected Closed Date": "10 May 22",
        "Risk Status": "Managed/Unmanaged/Under Review",
        "Remarks": "performing BGV's for Intern from May 2022 joiners onwards\n\n31st May 2022 - VT - Verified samples which demonstrate the risk has been closed"
      }
    ]
  },
  {
    "Risk ID": "RID-HR-002",
    "Risk Domain": "Human Resource Security",
    "Risk Statement": "Background checks are not performed on contractors",
    "Risk Consequences": "Contractors with improper qualifications/police records may not be identified",
    "Likelihood of the risk Occurrence": "Very Likely",
    "Impact on CIA": "High",
    "Inhereint Risk Severity": "",
    "Controls": [
      {
        "Existing Controls": "",
        "Control Type": "",
        "Nature of Control": "",
        "Residual Risk Severity": "",
        "Risk Treatment": "Mitigate",
        "Risk Owner": "Mitalee",
        "ISO 27001 Mapping": "A.7.1.1 Screening",
        "Risk Identification Date": "20 March 2022"
      },
      {
        "Planned Controls": "Background verification checks shall be performed for all staff including contractors (3)",
        "Control Type": "Manual",
        "Nature of Control": "Preventive",
        "Residual Risk Value after Planned Control": "6",
        "Expected Closed Date": "15 June 22",
        "Risk Status": "Open",
        "Remarks": ""
      }
    ]
  }
]
 
 

  return (
    <div>
      <h1>Risk Table</h1> 
        <HR_RiskTable risks={risks} />
      
    </div>
  );
}

export default HR_ExpTest;
