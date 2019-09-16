import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { sendMessage, setValue } from '../actions/index';

class MessageForm extends Component {
  handleChange = (event) => {
    const { setValue } = this.props;
    setValue(event.target.value);
  }

  handleSubmit = (event) => {
    const { sendMessage, formValue, activeUser, activeChannel } = this.props;
    event.preventDefault();
    sendMessage(formValue, activeUser, activeChannel);
    setValue("");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group m-0">
          <input value={this.props.formValue} type="message" className="form-control" id="exampleInputMessage" aria-describedby="messageHelp" placeholder="Hey bro..." onChange={this.handleChange} />
          <small id="messageHelp" className="form-text text-muted">{"We'll never share your data with anyone else."}</small>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValue: state.formValue,
    activeUser: state.activeUser,
    activeChannel: state.activeChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage, setValue }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
