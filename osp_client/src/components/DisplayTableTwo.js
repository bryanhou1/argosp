import React, {Component} from 'react';
import UnitSelectButtonContainer from './UnitSelectButtonContainer';
import {Container, Grid, Menu, Segment} from 'semantic-ui-react';
import PaginationMenu from './PaginationMenu';
import { StickyTable, Row, Cell} from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import DownloadTableTwoLink from '../components/DownloadTableTwoLink'

class DisplayTableTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        minWidth: "100px"
      },
      intervalId: null
    }
  }

  componentDidMount () {
    this.setState({intervalId: setInterval(() => this.polling(), 4000)})
  }

  componentDidUpdate() {
    this.polling()
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  polling () {
    if (this.props.jobId !== "") {
      this.props.getTable2(this.props.jobId)
    }
  }

  render() {
    let {yLabels, yHeaders, xLabels, xHeaders, grid16s, gridCell, gridPpm, displayUnit, paginate, display, builtGrids} = this.props.sequences2Grid;
    let {horizontal, vertical} = paginate
    
    let xLabelsT = xLabels.map((xLabel, i)=> <Cell className={i === xLabels.length-1 ? "head border-bottom border-right" : "head border-bottom"} key={-i}>{xLabel}</Cell>)
    let xSpaces = [...Array(horizontal.elPerPage)].map((xLabel, i) => <Cell className="head border-bottom space" key={i}></Cell>)
  
    let spaces = []
    let spacesBorderBottom = []
    let rows = []

    // first row
    rows.push(
      <Row key="first-row">
        <Cell className="head border-bottom border-right space"></Cell>
        {xLabelsT}
        {xSpaces}
      </Row>
    )

    let currentGrid = ((displayUnit) => {
      switch(displayUnit){
        case "16s":
          return grid16s;
        case "cell":
          return gridCell;
        case "ppm":
          return gridPpm;
        default:
          return;
      }
    })(displayUnit);
    
    // 4x3 blank spaces
    for (let i = 0, j= xLabels.length; i< j; i++){ //horizontal counter
      spaces.push(<Cell className={(i===j-1 ? "label border-right space": "label space")} key={i}></Cell>)
      spacesBorderBottom.push(<Cell className={(i===j-1 ? "label border-right border-bottom space": "label border-bottom space")} key={i}></Cell>)
    }

    //row 4+ labels
    let xHeadersComp = []
    for (let i = 0; i < xHeaders.length; i++){
      xHeadersComp[i]=[]
      for (let j=0, k = xHeaders[0].length; j < k; j++){
        xHeadersComp[i].push(<Cell className={j === k-1 ? "label border-right": "label"} key={`${i},${j}`}>{xHeaders[i][j]}</Cell>)
      }
    }

     //fill up first 4 rows with spaces
    const addTrailingSpaces = (label) => {
      let spaces = []
      if (horizontal.currentPage === horizontal.pagesCount) {
        for (let i=0, j=horizontal.elPerPage - ((currentGrid[0].length % horizontal.elPerPage) || horizontal.elPerPage); i < j; i++) {
          spaces.push(<Cell key={"spaces"+i} className={label} />)
        }
        return spaces;
      } else {
        return null;
      }
    }

    //row 1-4 
    for (let i=0; i< yLabels.length;i++) { //vertical counter
      rows.push(
        <Row key={"labelRows" + i}>
          <Cell className={(i === yLabels.length-1) ? "head border-right border-bottom" :"head border-right"}>
            {yLabels[i]}
          </Cell>
          {(i === yLabels.length-1) ? spacesBorderBottom: spaces}
          {yHeaders.slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((yHeader, j) => <Cell className={(i === yLabels.length-1) ? "label border-bottom" : "label"} key={j}>{yHeader[i]}</Cell>)}
          {addTrailingSpaces((i === yLabels.length-1) ? "label border-bottom" : "label")}
        </Row>
      )
    }

    //remaining rows
    for (let i = vertical.elPerPage*(vertical.currentPage-1), j=vertical.elPerPage*(vertical.currentPage-1)+vertical.elPerPage; i<j; i++){
      let mainGridWidthCounterIndexes = [
        horizontal.elPerPage*(horizontal.currentPage-1),
        horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage
      ];
      rows.push(
        <Row key={"row "+i}>
          <Cell className="head border-right space" onClick={this.handleOnClick}/>
          {xHeadersComp[i] ? xHeadersComp[i] : spaces}
          {currentGrid[i] ? currentGrid[i].slice(...mainGridWidthCounterIndexes).map((abundance, j)=> <Cell className="main-grid-item" key={j}> {abundance} </Cell> )
            :
            currentGrid[0].slice(...mainGridWidthCounterIndexes).map((abundance, j)=> <Cell className="main-grid-item space" key={j} />)
          }
          {addTrailingSpaces("main-grid-item space")}
        </Row>
      )
    }

    let {sequences2Grid, changeTableTwoDisplayUnit} = this.props;
    
    if (sequences2Grid.display){
      if (sequences2Grid.grid16s[0].length !== 0 ) {
        return (
          <Container>
            <Grid stackable>
              <Grid.Row centered>
                <Grid.Column width={12}>
                  <Container>
                    <UnitSelectButtonContainer changeTableTwoDisplayUnit={changeTableTwoDisplayUnit}/>
                  </Container>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Container textAlign="right">
                    <DownloadTableTwoLink display={display} builtGrid={builtGrids[displayUnit]} displayUnit={displayUnit} />
                  </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={15}>
                  <Container>
                  <div style={{width: '100%', height: '420px'}}>
                    {/* modify stickyHeaderCount if implementing row amount changes */}
                    <StickyTable stickyHeaderCount={0} stickyColumnCount={4}>
                      {rows}
                    </StickyTable>
                  </div>
                  </Container>
                  <Segment style={{marginBottom: "2em"}} textAlign="right">
                    <Menu compact size="mini" style={{border: "none", boxShadow: "none"}}>   
                      <Menu.Item fitted className="non-inherited-border-less">
                        <PaginationMenu orientation={"horizontal"}/>
                      </Menu.Item>
                      <Menu.Item fitted className="non-inherited-border-less">
                        <PaginationMenu orientation={"vertical"}/>
                      </Menu.Item>
                    </Menu>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
          </Container>
        )
      } else {
        return <Container textAlign="center"> No Entry Found.</Container>
      }
    } else {
      return <Container />
    }
  }
}

export default DisplayTableTwo;