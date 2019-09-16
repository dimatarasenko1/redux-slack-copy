import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel } from '../actions/index';

class Channel extends Component {
  handleClick = (event) => {
    const { selectChannel, channel } = this.props;
    event.preventDefault();
    selectChannel(channel);
  };

  render() {
    const { activeChannel, channel } = this.props;
    let classes = "";
    if (channel === activeChannel) {
      classes = "active-channel";
    }
    return (
      <li className={classes} onClick={this.handleClick}>
        <a href="#">
          <i className="fab fa-slack-hash" />
          {this.props.channel}
        </a>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
