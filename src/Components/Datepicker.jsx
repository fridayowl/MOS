import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerButton = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const CustomDatePickerInput = React.forwardRef(({ onClick }, ref) => (
    <div onClick={onClick} ref={ref}>
      {selectedDate ? selectedDate.toDateString() : 'Click to select date'}
    </div>
  ));

  return (
    <div>
      <label>
        Select Date:
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<CustomDatePickerInput />}
          onClickOutside={() => document.getElementById('datePicker').blur()}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  );
};

export default DatePickerButton;
