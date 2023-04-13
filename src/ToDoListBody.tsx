import React, { PureComponent,Component } from 'react'
import { TodoItem , AppToDos } from './ToDoList'

type Props = {
  todos : TodoItem[],
  changeTaskStatus(isTaskCompleted : boolean,taskIndex : number) : void
}


export default class ToDoListBody extends Component<Props> {
  render() {
    const { todos } = this.props;

    return (
      <div className='bodyMain'>
        <ul className='todo-list'>
          {
            todos.map((value,index) => {

              console.log("value is ",JSON.stringify(value));

              return (
                <li key={value.id} className={value.done ? 'completed' :''}>
                  <div className='view'>
                    <input className='toggle' type='checkbox'  onChange={e=>{ this.onChangeValue(e,index) }}/>
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

  onChangeValue = (e : React.ChangeEvent<HTMLInputElement>,index : number) => {
    console.log(e.target.checked,index)
    const { changeTaskStatus } = this.props;
    changeTaskStatus && changeTaskStatus(e.target.checked,index);
  }
}
