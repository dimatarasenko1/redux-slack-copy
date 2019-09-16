import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setMessages } from '../actions/index';

import Channel from './channel';

class ChannelList extends Component {
  componentWillMount() {
    const { setMessages, activeChannel } = this.props;
    console.log(`the active channel is ${activeChannel}`);
    setMessages(activeChannel);
  }

  render() {
    const { channels, activeUser } = this.props;
    return (
      <div className="dash">
        <h2>Le Wagon</h2>
        <div className="user">
          <i className="fas fa-circle user-icon active-user" />
          <p className="username">{activeUser}</p>
        </div>
        <div className="channels">
          <div className="heading">
            <p>Channels</p>
            <i className="fas fa-plus" />
          </div>
          <ul>
            {channels.map(channel => <Channel channel={channel} key={channel} />)}
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    channels: state.channels,
    activeUser: state.activeUser,
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
