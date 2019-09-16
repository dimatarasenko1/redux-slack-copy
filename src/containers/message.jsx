import React from 'react';

const Message = (props) => {
  return (
    <div className="d-flex justify-content-start align-items-center mb-4">
      <img src="assets/images/my_face.jpeg" alt="my face" className="avatar" />
      <div className="msg-details ml-3">
        <p className="font-weight-bold username">{props.author}</p>
        <p className="text">{props.content}</p>
      </div>
    </div>
  );
};

export default Message;
