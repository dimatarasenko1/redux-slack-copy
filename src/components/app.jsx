import React from 'react';

import Navbar from './navbar';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
