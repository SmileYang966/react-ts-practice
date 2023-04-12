import React, { PureComponent } from 'react'
import arrow_down from './arrow_down.png'

export default class ToDoListHeader extends PureComponent {
  render() {
    return (
      <div className='headerMain'>
        <img src={arrow_down} className='arrowDown'/>
        <input className='inputClass' placeholder='What needs to be done ? '/>
      </div>
    )
  }
}
