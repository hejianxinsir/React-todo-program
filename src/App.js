import React, {Component} from 'react';
import './App.css';

import TodoInput from './TodoInput.js';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: '第一个代办'}
      ]
    }
  }

  render(){
    let todos = this.state.todoList.map((item, index)=>{
      return <li>{item.title}</li>
    })

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={ this.state.newTodo } />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  } 
}

