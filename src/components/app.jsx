import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/MessageList';
import Logo from '../components/Logo';

const App = () => {
  return (

    <div className="row">
      <Logo />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
