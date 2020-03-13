import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className='whole-card'>
        <div className='picture'>
            <img src={this.props.fkimg} alt='project shortcut'/>
        </div>
        <div className='title-of-project'>
            {this.props.title}
        </div>
        <div className='short-describe'>
            {this.props.describe}
        </div>
      </div>
    )
  }
}
