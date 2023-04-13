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
      <ToDoListHeader/>
      <ToDoListBody todos = {this.state.todos }/>
      <ToDoListBottom/>
    </div>
    )
  }
}



export default App;
