import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setChannels } from '../actions/index';

import Channel from './channel';

class ChannelList extends Component {
  componentWillMount() {
    const { setChannels } = this.props;
    setChannels();
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="dash">
        <h2>Le Wagon</h2>
        <div className="user">
          <i className="fas fa-circle user-icon active-user" />
          <p className="username">Dima Tarasenko</p>
        </div>
        <div className="channels">
          <div className="heading">
            <p>Channels</p>
            <i className="fas fa-plus" />
          </div>
          <ul>
            {channels.map(channel => <Channel channel={channel} key={channel.name} />)}
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannels }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
