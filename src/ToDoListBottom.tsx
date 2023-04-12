import React, { PureComponent } from 'react'

export default class ToDoListBottom extends PureComponent {
  render() {
    return (
      <div className='bodyBottom'>
        <span>0 item left</span>
        <button>Active</button>
        <button>Completed</button>
        <button>Clear completed</button>
      </div>
    )
  }
}
