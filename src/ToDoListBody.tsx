import React, { PureComponent } from 'react'
import { TodoItem , AppToDos } from './ToDoList'

export default class ToDoListBody extends PureComponent<AppToDos> {
  render() {
    const { todos } = this.props;

    return (
      <div className='bodyMain'>
        <ul className='todo-list'>
          {
            todos.map((value,index) => {
              return (
                <li key={value.id} className={value.done ? 'completed' :''}>
                  <div className='view'>
                    <input className='toggle' type='checkbox'/>
                    <label>{value.text}</label>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
