import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    return (
      <div className="selected-feed">
        <h2><i className="fab fa-slack-hash"></i>design</h2>
        <div className="message-history border-bottom border-top border-right py-3 mb-3">

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">arthur-littm</p>
              <p className="text">Hey everyone We’ve just launched a new Le Wagon UI Kit 🚀 👉 <a href="#">https://uikit.lewagon.com/</a></p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! </p>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mb-4">
            <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
            <div className="msg-details ml-3">
              <p className="font-weight-bold username">cveneziani</p>
              <p className="text">yay! 🤘</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
