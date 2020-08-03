import React, { Component } from 'react';
import MessageForm from '../containers/MessageForm';

class MessageList extends Component {
  render(){
    return(
      <div className="messageList col-sm-6">
        <h3 className="tittle"><b>Channel #general</b></h3>
          <MessageForm />
      </div>
      )
  }
}

export default MessageList;
