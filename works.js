import React, { Component } from 'react';
import faker from 'faker'
import './works.css'
import Card from '../Components/Card'



export default class Works extends Component {
  render() {
    return (
     <div className="blackBody">
        <div className='mySkillSet'>
          <div className='title'>
           My skill set
          </div>
        <div>
          </div>
        </div>
        <div className='frontEnd'>
          <div className='project'>
            <Card 
            fkimg={faker.image.imageUrl()} 
            title={faker.lorem.words()} 
            describe={faker.lorem.sentences()}/>
            <Card 
            fkimg={faker.image.imageUrl()} 
            title={faker.lorem.words()} 
            describe={faker.lorem.sentences()}/>
            <Card 
            fkimg={faker.image.imageUrl()} 
            title={faker.lorem.words()} 
            describe={faker.lorem.sentences()}/>
          </div>
        </div>
        <div className='backEnd'>
        </div>
     </div>
    )
  }
}
