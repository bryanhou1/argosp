import React, {Component} from 'react';
import LogoImg from '../containers/logo.svg';


export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LogoImg} alt={LogoImg} style={{width: 80, height: 80}}/>
      </div>
    )
  }
}