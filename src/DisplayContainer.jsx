import React from "react";
import MinuteInput from "./MinuteInput";
import CountDownDisplay from "./CountdownDisplay";
import Countdown from "react-countdown-now";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
    complete: false,
  };

  render() {
    if (this.state.complete) {
      const resetTime = Date.now() + (60 *  0.1 * 1000);
      return(
        <React.Fragment>
          <b className="timer-done">BLASTOFF</b>
          <Countdown
            date={resetTime}
            daysInHours
            onComplete={this.handleResetCompletion}
          />
        </React.Fragment>
      )
    }

    const countDownTime = Date.now() + (60 * this.state.inputMinutes * 1000);

    return (
      <div className="display">
        <CountDownDisplay
          class="timer"
          onCompletion={this.handleDisplayCompletion}
          time={countDownTime}
        />
        <MinuteInput onUpdate={this.handleUpdateDisplayCountDown} />
      </div>
    )
  };

  handleUpdateDisplayCountDown = (e) => {
    const minutes = Number.parseInt(e.currentTarget.value);
    this.setState({ inputMinutes: minutes })
  };

  handleUpdateResetCountDown = (e) => {
    const minutes = Number.parseInt(e.currentTarget.value);
    this.setState({ inputMinutes: minutes })
  };

  handleDisplayCompletion = () => {
    this.setState({ complete: true })
  };

  handleResetCompletion = () => {
    this.setState({ complete: false })
  }
};
