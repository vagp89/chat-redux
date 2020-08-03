import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannel } from '../actions';


class ChannelList extends Component {
   handleClick = (channel) => {
     this.props.setChannel(channel);
   }

   render() {
     return (
       <div className="channel col-sm-4">
         <div className="channelBox">
           {this.props.channels.map((channel) => {
             return (
               <div onClick={() => this.handleClick(channel)}>
                 <h4> {channel} </h4>
               </div>
             )
           })}
         </div>
       </div>
     );
   }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
