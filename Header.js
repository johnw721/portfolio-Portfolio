import React, { Component } from 'react'
import './Header.css'
//import {Link} from 'react-scroll';

export default class Header extends Component {
  render() {
    return (
      <ul className="nav-bar">
        <li className="nav-items">
            Home
        </li>
        <li className="nav-items">
            About
        </li>
        <li className="nav-items">
            Works
        </li>
        <li className="nav-items">
            Contact
        </li>
      </ul>
    )
  }
}

