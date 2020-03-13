import React, { Component } from 'react'

import gmail from '../Pages/gmail.png' 
import linkedin from '../Pages/linkedin.png'
import ig from '../Pages/instagram-sketched.png'

import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
        <footer>
                <ul className='inline'>
                    <li>
                        <img className='img1' src = {gmail} alt='gmail logo'
                        title='Icons made by DinosoftLabs from www.flaticon.com'
                        />
                    </li>
                    <li>
                        <img className='img2' src={linkedin} alt='linkedin-logo'
                        title='Icons made by Freepik from www.flaticon.com'
                        />
                    </li>
                    <li>
                        <img className='img3' src={ig} alt='instagram-logo'
                        title='Icons made by Pixel perfect from www.flaticon.com'
                        />
                  </li>
                </ul>
            </footer>
    )
  }
}
