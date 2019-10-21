import _ from "lodash";
import React from "react";

import { func, number, string } from "prop-types";
import Countdown from "react-countdown-now";

export default class CountDownDisplay extends React.Component {
  static propTypes = {
    class: string,
    time: number,
    label: string,
    onCompletion: func,
  };

  static defaultProps = {
    class: "timer",
    onCompletion: _.noop,
  };

  render() {
    return (
        <div className={this.props.class} >
          <Countdown
            date={this.props.time}
            daysInHours
            onComplete={this.props.onCompletion}
          />
          <h4>{this.props.label}</h4>
        </div>
    )
  }
};
