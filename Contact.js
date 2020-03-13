import React, { Component } from 'react'

import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
    <div className='all'>
        <div className='contact-title'>
            Contact Info
        </div>
        <div className='grid-lock'>
            <div className='static-info'>
                <p>
                    Address: 6368 katie Ln, Morrow, GA 30260
                </p>
                <p>
                    Phone Number: 404-732-2467
                </p>
                <p>
                    Email: JarelWright058@gmail.com
                </p>
            </div>
            <form className="contact-form">
                <div className="input-format">
                    <input placeholder="Please Enter Name"></input>
                    <br/>
                    <input  placeholder="Please Enter Email"></input>
                    <br/>
                    <textarea placeholder="Please enter Message">
                    </textarea>
                    <br/>
                </div>
                <button className="submitBttn"> Submit </button>
            </form>
        </div>
        <div className='social-accounts'>
            <p>
             I can also be reached via 
            </p>
        </div>
    </div>
    )
  }
}
