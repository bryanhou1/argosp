import React,{Component} from 'react';
import {Message} from "semantic-ui-react";

class ErrorsDisplay extends Component {

  render() {
    const {errors, clearErrors} = this.props;
    return (
      <div>
        { errors.length !== 0 ? <Message error header='Warning!' content={errors[0]} onDismiss={clearErrors}/> : null }
      </div>
    )
  }
}

export default ErrorsDisplay;