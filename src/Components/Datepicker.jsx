import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerButton = ({ defaultDate,setRisks ,risks,index , type  }) => {

    
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
     const updatedRisks = [...risks];
     switch(type) {
        case "ExpectedClosedDate" :
        updatedRisks[index].RiskMonitoring.ExpectedClosedDate =date.toLocaleDateString('en-GB');
        break ; 
        case "RiskIdentificationDate" :
         updatedRisks[index].RiskIdentification.RiskIdentificationDate =date.toLocaleDateString('en-GB');   
        default :
        break ;

     }
      setRisks(updatedRisks)
  };

  const CustomDatePickerInput = React.forwardRef(({ onClick }, ref) => (
    <div onClick={onClick} ref={ref}>
      {selectedDate ? selectedDate.toLocaleDateString('en-GB') : defaultDate }
    </div>
  ));

  return (
    <div>
      <label> 
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<CustomDatePickerInput />}
          onClickOutside={() => document.getElementById('datePicker').blur()}
          style={{ display: 'none' }}
          dateFormat="dd/MM/yyyy"
        />
      </label>
    </div>
  );
};

export default DatePickerButton;
