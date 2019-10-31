import _ from "lodash";
import React from "react";

import { func, number, string } from "prop-types";
import Countdown from "react-countdown-now";

export default class CountDownDisplay extends React.Component {
  static propTypes = {
    class: string,
    time: number,
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
            intervalDelay={0}
            precision={3}
          />
        </div>
    )
  }
};
