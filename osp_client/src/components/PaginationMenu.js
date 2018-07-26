import React, { Component } from 'react'
import { Pagination, Input, Menu, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {switchTableTwoPage} from '../actions/index'


class PaginationMenu extends Component {
  handlePaginationChange = (e, { activePage}) => {
    this.props.switchTableTwoPage({orientation: this.props.orientation, page: activePage})
  }

  handlePaginationChange2 = (e, { value, max }) => {
    if (parseInt(value,10) > parseInt(max,10)) {value = max}
    this.props.switchTableTwoPage({orientation: this.props.orientation, page: value})
  }

  render() {
    let {orientation, paginate} = this.props;
    // let {currentPage, elPerPage, pagesCount} = paginate[orientation];
    // const firstCurrentEntry = currentPage <= 0 ? 0 : (currentPage-1)*elPerPage+1
    // const lastCurrentEntry = currentPage===pagesCount ? totalEntries : currentPage * elPerPage
    // const totalEntries = (orientation === 'horizontal') ? sequence2Grid.yHeaders.length : sequence2Grid.xHeaders.length
    
    let dict = { horizontal: "ARG", vertical: "Sample"}
    
    return (
      <Menu compact style={{border: "none", boxShadow: "none"}}>
        <Menu.Item fitted className="non-inherited-border-less">
          <Label size="large" style={{padding: "5% 0", textAlign: "center", height: "31.41px"}}> { dict[orientation] + " : "}</Label>
        </Menu.Item>
        <Menu.Item fitted
          className="non-inherited-border-less"
          content={<Pagination
            firstItem={false}
            lastItem={false}
            activePage={paginate[orientation].currentPage}
            onPageChange={this.handlePaginationChange}
            size='mini'
            totalPages={paginate[orientation].pagesCount}
          />}
        />
        <Menu.Item fitted
          className="non-inherited-border-less"
          content={
            <Input
              size="mini"
              style={{height: "31.41px"}}
              name='activePage'
              orientation={orientation}
              min={1}
              max={paginate[orientation].pagesCount}
              onChange={this.handlePaginationChange2}
              type='number'
              value={paginate[orientation].currentPage}
            />
          }/>
          <Menu.Item fitted>
           &nbsp;&nbsp;/&nbsp;{paginate[orientation].pagesCount}&nbsp;
         </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  const {paginate} = state.sequencesReducer.sequences2Grid;
  return {
    paginate: paginate,
    sequence2Grid: state.sequencesReducer.sequences2Grid
  }
}

export default connect(mapStateToProps, {switchTableTwoPage})(PaginationMenu);

