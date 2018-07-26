import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({channel, handleReceivedInfo}) => {
  return (
    <ActionCable
      channel={{ channel: channel }}
      onReceived={this.handleReceivedInfo}
    />
  )
};

export default Cable;
