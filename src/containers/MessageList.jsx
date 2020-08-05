import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessages } from '../actions';


import MessageForm from '../containers/MessageForm';

class MessageList extends Component {
  handleChange(message) {
    this.getState({ value: event.target.value });
  }

  handleSubmit(messages) {
    this.props.messages
    }
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
  return {
    messages: state.messages,
    selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
