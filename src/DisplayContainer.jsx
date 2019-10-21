import React from "react";
import MinuteInput from "./MinuteInput";
import CountDownDisplay from "./CountdownDisplay";

export default class DisplayContainer extends React.Component {
  state = {
    inputMinutes: 5,
    complete: false,
  };

  render() {
    const completedClass = this.state.complete === true ? "timer-done" : "timer";
    const label = this.state.complete === true ? "BLASTOFF" : null;
    const countDownTime = this.state.complete === true ?
      Date.now()
      :
      Date.now() + (60 * this.state.inputMinutes * 1000);


    return (
      <React.Fragment>
        <CountDownDisplay
          class={completedClass}
          label={label}
          onCompletion={this.handleCompletion}
          time={countDownTime}
        />
        <MinuteInput onUpdate={this.handleUpdate} />
      </React.Fragment>
    )
  };

  handleUpdate = (e) => {
    const minutes = Number.parseInt(e.currentTarget.value);
    this.setState({ inputMinutes: minutes })
  };

  handleCompletion = () => {
    this.setState({ complete: true })
  };
};
