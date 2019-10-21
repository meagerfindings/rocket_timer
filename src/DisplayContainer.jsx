import React from "react";
import Countdown from "react-countdown-now";
import MinuteInput from "./MinuteInput";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
  };

  render() {
    const countDownTime = Date.now() + (60 * this.state.inputMinutes * 1000);

    return (
      <React.Fragment>
        <Countdown date={countDownTime} classname="timer" daysInHours />
        {<h3>TIME TO LAUNCH</h3>}
        <MinuteInput onUpdate={this.handleUpdate} />
      </React.Fragment>
    )
  };

  handleUpdate = (e) => {
    const minutes = Number.parseInt(e.currentTarget.value);
    this.setState({ inputMinutes: minutes })
  }
};
