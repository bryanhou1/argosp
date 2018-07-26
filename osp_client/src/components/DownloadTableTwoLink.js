import React ,{Component} from 'react';
import { CSVLink } from 'react-csv';
import { Button } from 'semantic-ui-react';


export default class DownloadTableTwoLink extends Component{
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.dipslayUnit !== nextProps.dipslayUnit) {
      return true;
    } else if (
      !(this.props.builtGrid.length === nextProps.builtGrid.length &&
      this.props.builtGrid[0].length === nextProps.builtGrid[0].length &&
      this.props.builtGrid === nextProps.builtGrid)
    ) {
      return true;
    }
    return false;
  }

  handleBtnOnClick = (e) => {
    e.currentTarget.children[0].children[0].click()
  }

  render (){
    let {display, builtGrid} = this.props;
    return (
      display ? <Button 
        size="mini"
        onClick={this.handleBtnOnClick}
        content={
        <div>
          <CSVLink data={builtGrid}  style={{display: "none"}} filename={"metagenome-result.csv"}></CSVLink>
          <span> Download Search Results </span>
        </div>
        }/>: null
    )
  }
}

