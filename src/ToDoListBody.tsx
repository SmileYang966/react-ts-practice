import React, { PureComponent } from 'react'
import { TodoItem , AppToDos } from './ToDoList'

export default class ToDoListBody extends PureComponent<AppToDos,{}> {
  render() {
    return (
      <div className='bodyMain'>
        <ul>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ul>
      </div>
    )
  }
}
