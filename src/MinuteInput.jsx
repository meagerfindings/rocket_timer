import _ from "lodash";
import React from "react";

import { func, string } from "prop-types";

export default class MinuteInput extends React.Component {
  static propTypes = {
    label: string,
    onUpdate: func,
  };

  static defaultProps = {
    label: null,
    onUpdate: _.noop,
  };

  render() {
    return (
      <label className="launch-label">
        <i>{this.props.label}</i>
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
