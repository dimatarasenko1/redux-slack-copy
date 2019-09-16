import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';

import App from './components/app';

import activeChannelReducer from "./reducers/active_channel_reducer";
import channelsReducer from "./reducers/channels_reducer";
import messagesReducer from "./reducers/messages_reducer";
import sendMessagesReducer from "./reducers/send_messages_reducer";
import currentValueReducer from "./reducers/current_value_reducer";


const identityReducer = (state = null) => state;

const initialState = {
  channels: ['general', 'react', 'paris'],
  activeUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  activeChannel: 'general',
  formValue: 'hello'
};

const reducers = combineReducers({
  activeChannel: activeChannelReducer,
  activeUser: identityReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  sendMessage: sendMessagesReducer,
  formValue: currentValueReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise);
const store = createStore(reducers, initialState, middlewares);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
