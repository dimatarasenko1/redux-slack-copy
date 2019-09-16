import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';

import App from './components/app';

import activeChannelReducer from "./reducers/active_channel_reducer";
import activeUserReducer from "./reducers/active_user_reducer";
import channelsReducer from "./reducers/channels_reducer";
import messagesReducer from "./reducers/messages_reducer";


const reducers = combineReducers({
  activeChannel: activeChannelReducer,
  activeUser: activeUserReducer,
  channels: channelsReducer,
  messages: messagesReducer
});

// const initialState = {
//   activeChannel: null,
//   activeUser: null,
//   channels: [],
//   messages: []
// };

const middlewares = applyMiddleware(reduxPromise);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore((reducers))}>
      <App />
    </Provider>,
    root
  );
}
