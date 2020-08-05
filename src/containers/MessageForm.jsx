import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return(
      <form className="form" onSubmit={() => this.handleSubmit(messages}>
          <label>
            User:
             <input type="text" className="UserMessage" />
          </label>
            <input type="submit" className="buttomMessage" />
            <label>
            Message:
             <input type="text" className="textMessage" value={this.props.value} onChange={this.handleChange}  />
          </label>
            <input type="submit" value="Send" className="buttomMessage" />
      </form>
      )
  }
}

export default MessageForm;
