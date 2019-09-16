import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel } from '../actions/index';

class Channel extends Component {
  handleClick = () => {
    const { selectChannel, channel } = this.props;
    selectChannel(channel);
  };

  render() {
    const { activeChannel, channel } = this.props;
    let classes = "list-group-item";
    if (channel === activeChannel) {
      classes += " active";
    }
    return (
      <li className="active-channel" onclick={this.handleClick}>
        <a href="#">
          <i className="fab fa-slack-hash" />
          design
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
