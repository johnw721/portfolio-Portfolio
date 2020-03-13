import React, { Component } from 'react'
import './Landing.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="name-block">
          <div className='name'>
              Jarel Wright
          </div>
          <div className="title">
            Web Designer & Developer
          </div>
          <div className="Inspiration">
            "We learn to fly when we stop trying to reinvent the wheel"
          </div>
        </div>
      </div>
    )
  }
}
