import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerButton = ({ defaultDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
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
