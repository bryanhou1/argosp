import React, {Component} from 'react';
import SelectMenu from './SelectMenu';
import {Dropdown, Input, Dimmer, Loader, Popup} from 'semantic-ui-react'
// import * as CONST from '../constants/index'

class FormField extends Component {
  buildForm = (items) => {
    return items.map((item, i) => {
      if (item.type === "dropdown"){
        return (
          <div key={i}>
            <label>{item.displayName}:</label><br />
            <div className="ui input fluid">
              <Popup
                trigger={<Dropdown placeholder={`defaults to: ${item.default}`} fluid selection options={this.buildDropdownOptions(item.options)} id={item.dbName} onChange={this.props.handleChange}/>}
                content={item.hint}
                position='right center'
              />
            </div>
          </div>
        )
      }else if (item.type === "fillIn") {
        return (
          <div key={i}>
            <label htmlFor={item.dbName}>{item.displayName} : </label> <br/>
            <Popup
              trigger={<Input
                id={item.dbName}
                className="ui fluid"
                label={item.label}
                name='activePage'
                step={item.step || null}
                min={item.min}
                max={item.max}
                type='number'
                onChange={this.props.handleChange}
                placeholder={`defaults to: ${item.default}`}
              />}
              content={item.hint}
              position='right center'
            />
          </div>
        )
      }else{
        // modify as needed
        return (<div/>);
      }

    })
  }

  buildDropdownOptions = (options) => {
    return options.map((opt) => {
      return {
        text: `${opt}`,
        value: opt
      }
    })
  }
  
  render() {
    let { menuChoice, menu, fetchAutoComplete, autoCompleteCollection, blastMenu} = this.props;
    return (
      <div>
        <Dimmer active={autoCompleteCollection.fetching} inverted>
          <Loader content='Loading' />
        </Dimmer>
        <h3>Search</h3>
        {menu.map((i, index) => (
          <div key={index}>
            <SelectMenu menuChoice={menuChoice} idVal={index} name={i[0]} items={i[1]} fetchAutoComplete={fetchAutoComplete} autoCompleteCollection={autoCompleteCollection}/>
          </div>
        ))}
        <div>
          {this.buildForm(blastMenu)}
        </div>
      </div>
    )
  }
}

export default FormField;