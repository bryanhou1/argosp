import React, { Component } from 'react';
import BrowserDetection from 'react-browser-detection';

import BrowserMessage from './BrowserMessage.jsx';


const browserHandler = {
  safari: () => null,
  chrome: () => null,
  firefox: () => null,
  default: (browser) => {
    return <BrowserMessage browser={browser}/>;
  },
};

export default class BrowserDetectionContainer extends Component {

  render() {
    return (
      <BrowserDetection>
        {(browserHandler)}
      </BrowserDetection>
    )
  }
}
