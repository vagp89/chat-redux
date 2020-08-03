import React, { Component } from 'react';

class ChannelList extends Component {
  render(){
    return(
      <div className="channel col-sm-4">
        <h3><b>Redux Chat</b></h3>
          <div className="channelBox">
            <h4>#general</h4>
            <h4>#react</h4>
            <h4>#paris</h4>
          </div>


      </div>
      )
  }
}

export default ChannelList;
