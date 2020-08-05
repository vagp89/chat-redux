// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import ChannelsReducer from '../src/reducers/ChannelsReducer';
import MessagesReducer from '../src/reducers/MessagesReducer';
import SelectedChannelReducer from '../src/reducers/SelectedChannelReducer';
// State and reducers
const reducers = combineReducers({
  channels: ChannelsReducer,
  messages: MessagesReducer,
  selectedChannel: SelectedChannelReducer

});
const middlewares = applyMiddleware(logger);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, middlewares, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
