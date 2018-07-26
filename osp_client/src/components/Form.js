import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONST from '../constants/index';
import {Grid, Dimmer, Loader} from 'semantic-ui-react';
import SubmitButton from './SubmitButton.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: 0,
      eValue: 0,
      hitLength: 0,
      hitRatio: 0
    }
  }

  handleSubmit = (e) => {
    const {menuChoice, search} = this.props;
    let query = {}
    
    e.preventDefault();
    const menuLength = 2
    
    // submit only if value isn't empty
    for (let i=0; i< menuLength; i++) {
      if (document.getElementById(`attrField-${menuChoice}-${i}`).value !== "" && document.getElementById(`searchField-${menuChoice}-${i}`).value.trim() !=="") {
        query[document.getElementById(`attrField-${menuChoice}-${i}`).value] = document.getElementById(`searchField-${menuChoice}-${i}`).value.trim()
      }
    }
    
    if (menuChoice === 1){
      
      CONST.BLAST_CRITERIA_ENTRIES[menuChoice].DB.forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).value !== "") {
          query[prop] = document.getElementById(prop).value
        }
      })
    } else {
      CONST.BLAST_CRITERIA_ENTRIES[menuChoice].DB.forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).children[0].className !== "default text") {
          query[prop] = document.getElementById(prop).children[0].innerHTML
        }
      })
    }

    if (!query[CONST.DB.IDENTITY]) {
      // query[CONST.DB.IDENTITY] = menuChoice === 1 ? "90" : "80"
      query[CONST.DB.IDENTITY] = CONST.DEFAULT_VAL[menuChoice][CONST.DB.IDENTITY]
    }

    if (!query[CONST.DB.E_VALUE]) {
      // query[CONST.DB.E_VALUE] = menuChoice === 1 ? "1e-5" : "1e-7"
      query[CONST.DB.E_VALUE] = CONST.DEFAULT_VAL[menuChoice][CONST.DB.E_VALUE]
    }

    if (!query[CONST.DB.HIT_RATIO] && menuChoice === 1) {
      // query[CONST.DB.HIT_RATIO] = "0.8"
      query[CONST.DB.HIT_RATIO] = CONST.DEFAULT_VAL[menuChoice][CONST.DB.HIT_RATIO]
    }

    if (!query[CONST.DB.HIT_LENGTH] && menuChoice === 2) {
      // query[CONST.DB.HIT_LENGTH] = "25"
      query[CONST.DB.HIT_LENGTH] = CONST.DEFAULT_VAL[menuChoice][CONST.DB.HIT_LENGTH]
    }
    search(query, menuChoice);

  }

  menu = (menuChoice) => {
    switch (menuChoice) {
      case 1:
        return CONST.MENU_1;
      case 2:
        return CONST.MENU_2;
      default:
        return;
    }
  }

  blastMenu = (menuChoice) => {
    switch (menuChoice) {
      case 1:
        return [
          {displayName: CONST.DISPLAY.IDENTITY, dbName: CONST.DB.IDENTITY, type: "fillIn", min: 50, max:100, step: 1, label: CONST.TABLE_1_SIGNS[CONST.DB.IDENTITY], hint: "aa-based sequence similarity of BLAST results (50%-100%)", default: CONST.DEFAULT_VAL[1][CONST.DB.IDENTITY]},
          {displayName: CONST.DISPLAY.HIT_RATIO, dbName: CONST.DB.HIT_RATIO, type: "fillIn", min: 0.5, max: 1.0, step: 0.05, label:  CONST.TABLE_1_SIGNS[CONST.DB.HIT_RATIO], hint: "the percentage of aa-based hit-length to the reference length (0.5-1.0)", default: CONST.DEFAULT_VAL[1][CONST.DB.HIT_RATIO]}, 
          {displayName: CONST.DISPLAY.E_VALUE, dbName: CONST.DB.E_VALUE, type: "fillIn", min: 0, max: 1, step: 1e-200, label:  CONST.TABLE_1_SIGNS[CONST.DB.E_VALUE], hint: "the e-value of BLAST results (≤1.0E-1)", default: CONST.DEFAULT_VAL[1][CONST.DB.E_VALUE]}
        ]
      case 2:
        return [
          {displayName: CONST.DISPLAY.IDENTITY, dbName: CONST.DB.IDENTITY, type: "dropdown", options: [60,70,80,90,100], hint: "aa-based sequence similarity of BLAST results (60%, 70%, 80%, 90%, and 100%)",default: CONST.DEFAULT_VAL[2][CONST.DB.IDENTITY]},
          {displayName: CONST.DISPLAY.HIT_LENGTH, dbName: CONST.DB.HIT_LENGTH, type: "dropdown", options: [17, 25, 33], hint: "aa-based sequence hit-length of BLAST results (17 aa, 25 aa and 33 aa of 100bp reads)",default: CONST.DEFAULT_VAL[2][CONST.DB.HIT_LENGTH]}, 
          {displayName: CONST.DISPLAY.E_VALUE, dbName: CONST.DB.E_VALUE, type: "dropdown", options: ["1e-6", "1e-7", "1e-8", "1e-9"], hint: "the e-value of BLAST results (1.0E-6, 1.0E-7, 1.0E-8, 1.0E-9)",default: CONST.DEFAULT_VAL[2][CONST.DB.E_VALUE]}
        ];
      default:
        return [];
    }
  }

  handleChange = (e) => {
    //not sure how to make it pretty
    let value = (e.target.value || e.target.value === "") ? (e.target.value) : e.target.children[0].innerHTML
    this.setState({[e.target.id || e.target.parentElement.parentElement.id]: value})
  }


  remoteSubmitHandler = () => {
    this.formButton.click();
  }

  // prevent people from accidentally submitting
  onKeyPress(e) {
    if (e.target.type !== 'textarea' /* future proofing*/ && e.which === 13 /* Enter */) {
      e.preventDefault();
    }
}

  render() {
    const {menuChoice, fetchAutoComplete, autoCompleteCollection, resultFetching, errors, clearErrors} = this.props;
    return (
      <Grid centered>
        <Grid.Row centered>
          <Grid.Column>
            <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress}>
              <FormField
                menu={this.menu(menuChoice)}
                menuChoice={menuChoice}
                blastMenu={this.blastMenu(menuChoice)}
                fetchAutoComplete={fetchAutoComplete}
                autoCompleteCollection={autoCompleteCollection[menuChoice]}
                handleChange={this.handleChange}
              />
              <br />
              <div>
                <Dimmer active={autoCompleteCollection.fetching}>
                  <Loader/>
                </Dimmer>
                <SubmitButton resultFetching={resultFetching} remoteSubmit={this.remoteSubmitHandler} popupBool={this.state.identity && this.state.eValue && (this.state.hitRatio || this.state.hitLength)}/>
                <button hidden type='submit' ref={(button) => {this.formButton = button}} />
              </div>
            </form>
            <div>
              <br/>
              <ErrorsDisplay errors={errors} clearErrors={clearErrors}/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Form;