import React, { PureComponent } from 'react'
import arrow_down from './arrow_down.png'

type Props = {
  onAddToTask(task : string) : void
}

type State = {
  task : string
}

export default class ToDoListHeader extends PureComponent<Props,State> {

  state : State = {
    task : ''
  }

  render() {
    return (
      <div className='headerMain'>
        <img src={arrow_down} className='arrowDown'/>
        <input className='inputClass' placeholder='What needs to be done ? ' onKeyDown={this.onKeyDown}  onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.task}/>
      </div>
    )
  }

  onSubmit = (e : React.FormEvent<HTMLInputElement>) =>{
    const { onAddToTask } = this.props;
    onAddToTask && onAddToTask(this.state.task);
  }

  onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {

    if(this.state.task === '') return;

    if(e.code === 'Enter'){
      const { onAddToTask } = this.props;
      onAddToTask && onAddToTask(this.state.task);
      this.setState({
        task : ''
      })
    }
  }

  onChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      task : e.target.value
    })
  }
}
