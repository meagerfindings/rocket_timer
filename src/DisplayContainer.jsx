import React from "react";
import Countdown from "react-countdown-now";
import MinuteInput from "./MinuteInput";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
  };

  render() {
    const countDownTime = Date.now() + (60 * this.state.inputMinutes * 1000);

    const completed = countDownTime <= Date.now() ? "timer-done" : "timer";

    const label = completed === "timer" ?
      "TIME TO LAUNCH"
      :
      "BLASTOFF";

    return (
      <React.Fragment>
        <div className={completed} >
          <Countdown date={countDownTime} daysInHours />
          <h4>{label}</h4>
        </div>
        <MinuteInput onUpdate={this.handleUpdate} />
      </React.Fragment>
    )
  };

  handleUpdate = (e) => {
    const minutes = Number.parseInt(e.currentTarget.value);
    this.setState({ inputMinutes: minutes })
  }
};
