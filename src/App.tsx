import React, { Component } from 'react';
import logo from './logo.svg';
import './ToDoList.css'

import ToDoListHeader from './ToDoListHeader';
import ToDoListBody from './ToDoListBody';
import ToDoListBottom from './ToDoListBottom';
import { type } from 'os';
import { TodoItem , AppToDos } from './ToDoList'


const todos : TodoItem[] = [
  {
    id : 1,
    text : '吃饭',
    done : true
  },
  {
    id : 2,
    text : '洗澡 ',
    done : false
  },
  {
    id : 3,
    text : '睡觉',
    done : false
  },
  {
    id : 4,
    text : '健身',
    done : false
  }
]

class App extends Component<{},AppToDos>{

  state : AppToDos = {
    todos : todos
  }

  render() {
    return (
    <div className="AppTop">
      <ToDoListHeader onAddToTask={this.addTask}/>
      <ToDoListBody todos = {this.state.todos } changeTaskStatus={this.isChangeTaskStatus}/>
      <ToDoListBottom/>
    </div>
    )
  }

  addTask = (text : string) => {
    console.log("addTask ----- text is ",text);
    const { todos } = this.state;
    const id = todos.length === 0 ? 1 : todos[todos.length-1].id + 1;     
    const newTask : TodoItem = {
      id : id,
      text : text,
      done : false 
    }

    this.setState({
      todos : [...todos,newTask]
    })
  }

  isChangeTaskStatus = (isTaskCompleted : boolean,taskIndex : number) => {
    const { todos } = this.state;
    let task = todos[taskIndex];
    task.done = isTaskCompleted;

    todos.splice(taskIndex,1,task)

    console.log("todos is ",JSON.stringify(todos));

    this.setState({
      todos : todos
    })
  }
}



export default App;
