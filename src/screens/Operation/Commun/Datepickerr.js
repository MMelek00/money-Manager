import React from "react";
import DatePicker from "react-native-datepicker";
const DatePickerr = ({ handleDateChange, date }) => {
  return (
    <DatePicker
      style={{ width: 370 }}
      date={date}
      mode="date"
      format="MMM Do YYYY"
      minDate="2000-01-01"
      maxDate="2050-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={_date => {
        handleDateChange(_date);
      }}
    />
  );
};

export default DatePickerr;
