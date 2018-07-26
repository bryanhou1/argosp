import React, { Component } from 'react'
import { Menu, Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router'
import Logo from './Logo.js';

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleDDClick = (e) => {
    window.open(e.currentTarget.dataset.link,e.currentTarget.dataset.target)
  }
  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted fixed={this.props.windowWidth < 768 ? null : "top"} borderless size="massive" className="Navbar">
        <Menu.Item
          as={Link} to='/'
          name='Logo'
          onClick={this.handleItemClick}
          fitted
        >
          <Logo/>
        </Menu.Item>
        <Menu.Item
          header
          as={Link} to='/'
          name='Home'
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item 
          as={Link} to='/about'
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
        <Menu.Item
          as={Link} to='/table1'
          name='Table One'
          active={activeItem === 'Table One'}
          onClick={this.handleItemClick}
        >
          Whole Genomes
        </Menu.Item>
        <Menu.Item
          name='Table Two'
          as={Link} to='/table2'
          active={activeItem === 'Table Two'}
          onClick={this.handleItemClick}
        >
          Metagenomes
        </Menu.Item> 
        <Menu.Menu position='right'>
          <Dropdown item text='Related Links' inverted="true">
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleDDClick} data-link="http://web.hku.hk/~zhangt/ZhangT.htm" data-target="_blank">Our Lab</Dropdown.Item>
              <Dropdown.Item onClick={this.handleDDClick} data-link="https://smile.hku.hk/SARGs" data-target="_blank">Other Tools</Dropdown.Item>
              <Dropdown.Item onClick={this.handleDDClick} data-link="about" data-target="_self">Team</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
