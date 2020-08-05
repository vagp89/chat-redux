import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessages } from '../actions';


import MessageForm from '../containers/MessageForm';

class MessageList extends Component {
  render(){
    return(
      <div className="messageList col-sm-6">
        <h3 className="tittle"><b>Channel #{this.props.selectedChannel}</b></h3>
          <div className="boxMessage">
              {this.props.messages}
          </div>
          <MessageForm />
      </div>
      )
  }
}

function mapStateToProps(state) {
  const selectedChannel = state.selectedChannel;
  const messages = state.messages;
  const channelMessages = messages.filter(message => message.channel === selectedChannel);
  return {
    messages: channelMessages,
    selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
