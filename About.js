import React, { Component } from 'react'

import './About.css'
import me from './gotgood.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="About-slide">
        <div className="About">
          <div className="avatar">
            <img src={me} alt="Profile"/>
          </div>
          <div className="info-sec">
                A little about me
          </div>
          <div className="p1"> 
                Hello, my name is Jarel Wright.
                 I began my journey of web development back in 
                2018, while attending the University of West Georgia. Simply fascinated with the 
                complexity and problem solving skills required to build my favorite sites, I delve into
                CSS and HTML. At first my journey was scattered and unorganized. That is until, I started using
                resources such as codeacademy, Udemy, and MITOpenCourseWare just to name a few.
              </div>
        </div>
      </div>
    )
  }
}
