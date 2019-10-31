import React from "react";
import MinuteInput from "./MinuteInput";
import CountdownDisplay from "./CountdownDisplay";
import Countdown from "react-countdown-now";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
    complete: false,
    resetMinutes: 3,
    settingsVisible: false,
  };

  render() {
    if (this.state.complete) {
      const resetTime = Date.now() + (60 *  this.state.resetMinutes * 1000);
      return(
        <React.Fragment>
          <b className="timer-done">BLASTOFF!</b>
          <Countdown
            date={resetTime}
            daysInHours
            onComplete={this.handleResetCompletion}
          />
          {this.renderSettings(this.handleUpdateDisplayCountdown, this.handleUpdateResetCountdown)}
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
        {this.renderSettings(this.handleUpdateDisplayCountdown, this.handleUpdateResetCountdown)}
      </div>
    )
  };

  renderSettings = (handleDisplayInput, handleResetInput) => {
    if (this.state.settingsVisible) {
      return (
        <div>
          {this.renderSettingsIcon()}
          <MinuteInput onUpdate={handleDisplayInput} label="Minutes for Countdown"/>
          <br/>
          <MinuteInput onUpdate={handleResetInput} label={"Minutes for Reset"}/>

        </div>
      )
    }

    return this.renderSettingsIcon();
  };

  renderSettingsIcon = () => {
    return <div className="settings-icon" onClick={this.toggleSettings}>🚀️</div>
  };

  toggleSettings = () => {
    this.setState({ settingsVisible: !this.state.settingsVisible})
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
