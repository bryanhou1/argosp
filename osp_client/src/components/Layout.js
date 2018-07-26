import React, { Component } from 'react'
import Navbar from './NavBar'
import Footer from './Footer.jsx'
import BrowserDetectionContainer from './BrowserDetectionContainer'
export default class Layout extends Component {
  constructor(){
    super()
    this.state = {
      styles: {
        marginTop: 0
      },
      windowWidth: window.innerWidth
    };
  }

  updateDimensions = () => {
    this.setState((prevState) => {
      return {
        styles:{
          marginTop: (prevState.windowWidth < 768 ? prevState.styles.margeinTop : document.getElementsByClassName("Navbar")[0].offsetHeight )
        },
        windowWidth: window.innerWidth
      }
    })
  }
  
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    return (
      <div>
        <Navbar windowWidth={this.state.windowWidth}/>
        <div style={this.state.styles}>
          <BrowserDetectionContainer/>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}