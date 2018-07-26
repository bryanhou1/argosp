import React, { Component } from 'react';
import {Message} from 'semantic-ui-react';

export default class BrowserMessage extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    let {browser} = this.props;
    if (this.state.visible) {
      return (
        <Message
          warning
          onDismiss={this.handleDismiss}
          header={"It is dectected that you are currently using " + browser}
          content='Please use the newest version of Chrome to prevent unintended behavior.'
        />
      );
    } else {
      return null
    }
  }
}

