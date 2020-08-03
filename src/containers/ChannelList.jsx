import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannel } from '../actions';
import { selectChannel } from '../actions';


class ChannelList extends Component {
   handleClick = () => {
     this.props.selectChannel(this.props.channels);
   }

   render() {
     return (
       <div className="channel col-sm-4">
         <div className="channelBox" onClick={this.handleClick}>
           {this.props.channels.map((channel) => {
             return <h4> {channel} </h4>;
           })}
         </div>
       </div>
     );
   }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.channels

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannel, selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
