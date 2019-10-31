import React from "react";
import MinuteInput from "./MinuteInput";
import CountdownDisplay from "./CountdownDisplay";
import Countdown from "react-countdown-now";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
    complete: false,
    resetMinutes: 3,
  };

  render() {
    if (this.state.complete) {
      const resetTime = Date.now() + (60 *  this.state.resetMinutes * 1000);
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
        <CountdownDisplay
          class="timer"
          onCompletion={this.handleDisplayCompletion}
          time={countDownTime}
        />
        <MinuteInput onUpdate={this.handleUpdateDisplayCountdown} label="Minutes to launch"/>
        <MinuteInput onUpdate={this.handleUpdateResetCountdown} label={"Minutes for Reset"}/>
      </div>
    )
  };

  handleUpdateDisplayCountdown = (e) => {
    this.setState({ inputMinutes: this.minutesFromInput(e) })
  };

  handleUpdateResetCountdown = (e) => {
    this.setState({ resetMinutes: this.minutesFromInput(e) })
  };

  minutesFromInput = (input) => {
    return Number.parseInt(input.currentTarget.value);
  };

  handleDisplayCompletion = () => {
    this.setState({ complete: true })
  };

  handleResetCompletion = () => {
    this.setState({ complete: false })
  }
};
