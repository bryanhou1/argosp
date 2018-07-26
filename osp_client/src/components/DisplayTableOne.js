import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as CONST from "../constants/index";
import matchSorter from 'match-sorter';

class DisplayTableOne extends Component {
  //shortpolling
  constructor(props) {
    super(props)
    this.state = {
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
      this.props.getTable1(this.props.jobId)
    }
  }



  //filter methods
  fuzzyMatch = (filter, rows) => matchSorter(rows, filter.value, { keys: [filter.id] })
  capMatch = (filter, rows) => {
    return rows[filter.id].toLowerCase().startsWith(filter.value.toLowerCase())
  }
  numMatch = (filterType) => filterType=== "<=" ? 
  (filter, rows) => (Number(rows[filter.id]) <= Number(filter.value))
  :
  (filter, rows) => (Number(rows[filter.id]) >= Number(filter.value))



  render() {
    const {sequences} =this.props;
    return (
      <ReactTable
          data={sequences}
          filterable
          columns={[
            {
              Header: CONST.ARG,
              columns: [
                {
                  Header: CONST.DISPLAY.ARG,
                  accessor: CONST.DB.ARG,
                  filterMethod: this.capMatch,
                },{
                  Header: CONST.DISPLAY.SUBTYPE,
                  accessor: CONST.DB.SUBTYPE,
                  filterMethod: this.capMatch,
                },
                {
                  Header: CONST.DISPLAY.TYPE,
                  accessor: CONST.DB.TYPE,
                  filterMethod: this.capMatch,
                }
              ]
            },
            {
              Header: CONST.GENOME_TAXONOMY,
              columns: [
                {
                  Header: CONST.DISPLAY.GENOME,
                  accessor: CONST.DB.GENOME,
                  filterMethod: this.capMatch,
                },
                {
                  Header: CONST.DISPLAY.ACCESSION,
                  accessor: CONST.DB.ACCESSION,
                  filterMethod: this.capMatch,
                },
                {
                  Header: CONST.DISPLAY.PHYLUM,
                  accessor: CONST.DB.PHYLUM,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.CLASS,
                  accessor: CONST.DB.CLASS,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.ORDER,
                  accessor: CONST.DB.ORDER,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.FAMILY,
                  accessor: CONST.DB.FAMILY,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.GENUS,
                  accessor: CONST.DB.GENUS,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.SPECIES,
                  accessor: CONST.DB.SPECIES,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONST.DISPLAY.STRAIN,
                  accessor: CONST.DB.STRAIN,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                }
            
              ]
            },
            {
              Header: CONST.BLAST_CRITERIA,
              columns: [
                {
                  Header: CONST.DISPLAY.IDENTITY,
                  accessor: CONST.DB.IDENTITY,
                  filterMethod: this.numMatch(">=")
                },
                {
                  Header: CONST.DISPLAY.HIT_RATIO,
                  accessor: CONST.DB.HIT_RATIO,
                  filterMethod: this.numMatch(">="),
                },
                {
                  Header: CONST.DISPLAY.E_VALUE,
                  accessor: CONST.DB.E_VALUE,
                  filterMethod: this.numMatch("<="),
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    )
  }

}

export default DisplayTableOne;
