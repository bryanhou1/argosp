import React, {Component} from 'react';
import {Popup, Button, Grid, Icon} from 'semantic-ui-react';

export default class SubmitButton extends Component {

  state = {isOpen: false}

  mainButton (resultFetching, type) {
    return (
      <Button primary fluid
        type={type}
        animated="fade"
        loading={resultFetching}
        disabled={resultFetching}
      > 
        <Button.Content visible> Search </Button.Content>
        <Button.Content hidden>
          <Icon name='search' />
        </Button.Content>
      </Button>
    )
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }
  
  confirmSubmit = (e) => {
    this.props.remoteSubmit();
    this.setState({isOpen: false})
  }

  rejectSubmit = () => {
    this.setState({isOpen: false})
  }

  render() {
    let {resultFetching, popupBool } = this.props;
    

    //fix
    return popupBool ? (<div>
      {this.mainButton(resultFetching, "submit")}
    </div>) : (
      <Popup wide trigger={this.mainButton(resultFetching, "button")}
        on='click'
        position="right center"
        open={this.state.isOpen}
        onOpen={this.handleOpen}
      >
        <Grid divided columns='equal'>
          <Grid.Column verticalAlign="middle">
            <Button type="submit" color='green' content='Proceed with default blast criteria?'  onClick={this.confirmSubmit}/>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Button color='red' content='Return to fill in search criteria.' onClick={this.rejectSubmit} />
          </Grid.Column>
        </Grid>
      </Popup>
    )
  }
}