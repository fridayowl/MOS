import './App.css';
import HR_RiskTable from 'Components/HR_RiskTable';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    let storedRisks = localStorage.getItem('Risk_HRTable.json'); 
   if (!storedRisks) {
       console.log( storedRisks)
       storedRisks =[]
        console.log( storedRisks)
    }
     console.log( storedRisks.length)
    if ( storedRisks.length > 2 ) {
      setRisks(JSON.parse(storedRisks)); 
    } else {
       console.log('else')
      // Use the default risks data if 'Risk_HRTable.json' is not found in local storage or the length is null
      setRisks([
        {
          "Risk ID": "RID-HR-001",
          "Risk Domain": "Pre Employment",
          "Risk Statement": "Background checks are not performed on interns",
          "Risk Consequences": "Interns with improper qualifications/police records may not be identified",
          "Likelihood of the risk Occurrence": "Very Likely",
          "Impact on CIA": "High Medium Low",
          "Inhereint Risk Severity": "Low/Medium/High",
          "Existing Controls": "No Control Required, The risk is managed (+)",
          "Control Type": "Manual",
          "Nature of Control": "Recovery",
          "Residual Risk Severity": "High/Medium/Low",
          "Risk Treatment": "Accept",
          "Risk Owner": "Mitalee",
          "ISO 27001 Mapping": "A.7.1.1 Screening",
          "Risk Identification Date": "20 March 2022",
          "Risk Status": "Managed/Unmanaged/Under Review",
          "Remarks": "performing BGV's for Intern from May 2022 joiners onwards\n\n31st May 2022 - VT - Verified samples which demonstrate the risk has been closed"
        },
        {
          "Risk ID": "RID-HR-002",
          "Risk Domain": "Human Resource Security",
          "Risk Statement": "Background checks are not performed on contractors",
          "Risk Consequences": "Contractors with improper qualifications/police records may not be identified",
          "Likelihood of the risk Occurrence": "Very Likely",
          "Impact on CIA": "High",
          "Inhereint Risk Severity": "",
          "Existing Controls": "",
          "Control Type": "",
          "Nature of Control": "",
          "Residual Risk Severity": "",
          "Risk Treatment": "Mitigate",
          "Risk Owner": "Mitalee",
          "ISO 27001 Mapping": "A.7.1.1 Screening",
          "Risk Identification Date": "20 March 2022",
          "Risk Status": "Open",
          "Remarks": ""
        }
      ]);
    }
  }, []);

 

  return (
    <div>
      <h1>Risk Table</h1> 
        <HR_RiskTable risks={risks} />
      
    </div>
  );
}

export default Test;
