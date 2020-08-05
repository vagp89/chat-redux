import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return(
      <form className="form">
          <label>
            User:
             <input type="text" className="UserMessage" />
          </label>
            <input type="submit" value="Send" className="buttomMessage" />
            <label>
            Message:
             <input type="text" className="textMessage" />
          </label>
            <input type="submit" value="Send" className="buttomMessage" />
      </form>
      )
  }
}

export default MessageForm;
