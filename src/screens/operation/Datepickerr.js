import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
export default class DatePickerr extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2008-04-04" };
  }
  render() {
    return (
      <DatePicker
        style={{ width: 370 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2050-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ date: date });
        }}
      />
    );
  }
}
