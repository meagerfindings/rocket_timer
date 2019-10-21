import _ from "lodash";
import React from "react";

import { func } from "prop-types";

export default class MinuteInput extends React.Component {
  static propTypes = {
    onUpdate: func,
  };

  static defaultProps = {
    onUpdate: _.noop,
  };

  render() {
    return (
      <label className="launch-label">
        <i>Minutes to launch</i>
        <br/>
        <input
          type="text"
          pattern="[0-9]*"
          onChange={this.props.onUpdate}
        />
      </label>
    )
  }
};
