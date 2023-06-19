import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerButton = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleDatePicker = () => {
    if (selectedDate === null) {
      setSelectedDate(new Date());
    }
  };

  return (
    <div>
      {selectedDate ? (
        <button>{selectedDate.toDateString()}</button>
      ) : (
        <div>
          <button onClick={toggleDatePicker}>Select the Date</button>
        </div>
      )}
      {selectedDate && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          onClickOutside={() => setSelectedDate(null)}
          withPortal
          inline
        />
      )}
    </div>
  );
};

export default DatePickerButton;
