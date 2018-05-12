import React from "react";
import DatePicker from "react-native-datepicker";
const DatePickerr = ({ handleDateChange, date }) => {
  return (
    <DatePicker
      style={{ width: 370, borderWidth: 0, borderColor: "#d6d7da" }}
      date={date}
      mode="date"
      format="MMM Do YYYY"
      minDate="2000-01-01"
      maxDate="2050-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      onDateChange={_date => {
        handleDateChange(_date);
      }}
    />
  );
};

export default DatePickerr;
