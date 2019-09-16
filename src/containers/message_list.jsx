import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from './message';
import MessageForm from './message_form';
import { setMessages } from '../actions/index';

class MessageList extends Component {
  componentDidMount() {
    setInterval(() => this.props.setMessages(this.props.activeChannel), 5000);
  }
  render() {
    const { activeChannel, messages } = this.props;
    console.log(messages)
    if (activeChannel) {
      return (
        <div className="selected-feed">
          <h2>
            <i className="fab fa-slack-hash" />
            {activeChannel}
          </h2>
          <div className="message-history border-bottom border-top border-right py-3 mb-3">
            {messages.messages.map(m => <Message m={m} key={m.created_at} />)}
          </div>
          {<MessageForm />}
        </div>
      );
    }
    return null;
  }
}


function mapStateToProps(state) {
  return {
    activeChannel: state.activeChannel,
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
