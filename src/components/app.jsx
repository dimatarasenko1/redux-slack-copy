import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Navbar from './navbar';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

import { selectUser } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    if (!this.props.activeUser) {
      const username = window.prompt("Type in your username");
      const user = { username: username };
      this.props.selectUser(user);
    }
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <ChannelList />
        <MessageList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
