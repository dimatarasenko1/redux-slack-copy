import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from './message';
import { setMessages } from '../actions/index';

class MessageList extends Component {
  componentDidMount() {
    setInterval(this.props.setMessages, 5000);
  }
  render() {
    const { activeChannel, messages } = this.props;
    if (activeChannel) {
      return (
        <div className="selected-feed">
          <h2>
            <i className="fab fa-slack-hash" />
            {activeChannel}
          </h2>
          <div className="message-history border-bottom border-top border-right py-3 mb-3">
            {messages.map(m => <Message m={m.content} key={m.created_at} />)}
          </div>
          <div className="send-message">
            <form>
              <div className="form-group m-0">
                <input type="message" className="form-control" id="exampleInputMessage" aria-describedby="messageHelp" placeholder="Hey bro..." />
                <small id="messageHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
              </div>
            </form>
          </div>
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
