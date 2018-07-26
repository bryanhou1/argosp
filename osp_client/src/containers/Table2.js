import React, { Component } from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {initiateSession, fetchAutoComplete, searchTable2, changeTableTwoDisplayUnit, switchTableTwoPage, getTable2, clearErrors} from '../actions/index'
import 'react-datasheet/lib/react-datasheet.css'
import ResDivider from '../components/ResDivider'
import DisplayTableTwo from '../components/DisplayTableTwo'
import {Container, Grid, Segment} from 'semantic-ui-react'
import  * as CONST from '../constants/index'

class Table2 extends Component {

  searchedQueryLayout = () => {
    let {searchedQuery} = this.props;
    let entries = []

    //expect 1,2 or none entries
    let allKeys = (Object.keys(searchedQuery[2]))
    let firstTwoAttrKeys = allKeys.filter((key) => !(CONST.BLAST_CRITERIA_ENTRIES[2].DB.includes(key)) )

    firstTwoAttrKeys.forEach((key) => {
      entries.push(
        <div key={"search query others " + key}>
          <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {searchedQuery[2][key]}
        </div>
      )
    })

    entries.push(CONST.BLAST_CRITERIA_ENTRIES[2].DB.map((key) => (
      <div key={"search query blast " + key}>
         <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {searchedQuery[2][key]}
      </div>
    )))

    return (
      <div>
        {entries}
      </div>
    )
  }

  render() {
    const {fetchAutoComplete, autoCompleteCollection, searchTable2, sequences2Grid, changeTableTwoDisplayUnit, switchTableTwoPage, resultFetching, searchedQuery, jobId, getTable2, errors, clearErrors} = this.props;
    //to prevent refresh on other variable changes.
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={13}>
              <div style={{paddingTop: "2em"}}>
                <h1>Metagenomes</h1>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form 
                menuChoice = {2}
                search={searchTable2}
                fetchAutoComplete={fetchAutoComplete} 
                autoCompleteCollection={autoCompleteCollection}
                resultFetching={resultFetching}
                errors={errors}
                clearErrors={clearErrors}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {Object.keys(searchedQuery[2]).length !== 0 ? (
              <Grid.Column width={4}>
                <Segment>
                  <h3>Searched Queries</h3>
                  {this.searchedQueryLayout()}
                </Segment>
              </Grid.Column>
            ): <div/>}
          </Grid.Row>
        </Grid> 
        <ResDivider text={"result"} hidden={!sequences2Grid.display}/>
        <Container>
          <DisplayTableTwo sequences2Grid={sequences2Grid} changeTableTwoDisplayUnit={changeTableTwoDisplayUnit} switchTableTwoPage={switchTableTwoPage} jobId={jobId} getTable2={getTable2}/>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { sequences2Grid, autoCompleteCollection, fetching, searchedQuery,jobIds, errors } = state.sequencesReducer;
  return {
    jobId: jobIds[2],
    resultFetching: fetching,
    sequences2Grid: sequences2Grid,
    searchedQuery: searchedQuery,
    autoCompleteCollection: autoCompleteCollection,
    errors: errors
  }
}

export default connect(mapStateToProps, {initiateSession, fetchAutoComplete, searchTable2, getTable2, changeTableTwoDisplayUnit, switchTableTwoPage, clearErrors})(Table2);
