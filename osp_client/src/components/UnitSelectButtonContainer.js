import React, {Component} from 'react'
import { Button, Popup } from 'semantic-ui-react'
import UnitSelectButton from './UnitSelectButton'

class UnitSelectButtonContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeButtonName : "per 16S"
    }
  }

  onClick = (optionName, changeTableTwoDisplayUnit) => {
    let dict = {"per 16S": "16s", "per Cell": "cell", "ppm": "ppm"}
    
    changeTableTwoDisplayUnit(dict[optionName])
    this.setState({activeButtonName: optionName})
  }
  
  buttonGroup = () => (
    <Button.Group className="stackable" size="mini">
      <UnitSelectButton active={"per 16S" === this.state.activeButtonName} onClick={this.onClick} optionName={"per 16S"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
      <UnitSelectButton active={"per Cell" === this.state.activeButtonName} onClick={this.onClick} optionName={"per Cell"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
      <UnitSelectButton active={"ppm" === this.state.activeButtonName} onClick={this.onClick} optionName={"ppm"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
    </Button.Group>
  )

  popupContent = () => (
    <div>
      <strong>Copy per cell:</strong> copy ARGs per cell <br />
      <strong>Copy per 16S:</strong> copy ARGs per copy 16S <br />
      <strong>ppm:</strong> 1 ARG sequence per million sequences <br />
    </div>
  )
  render() {
    return (
      <div>
        Unit:&nbsp;&nbsp;
        <Popup
          trigger={this.buttonGroup()}
          content={this.popupContent()}
          position='left center'
        />
      </div>
    )
  }

}

export default UnitSelectButtonContainer;