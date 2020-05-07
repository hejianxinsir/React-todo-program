import React, {Component} from 'react';
import './css/App.css';

import TodoInput from './TodoInput.js';
import TodoItem from './TodoItem.js';
import 'normalize.css';
import './css/reset.css';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      newTodo: '',
      todoList: [

      ]
    }
  }

  render(){
    let todos = this.state.todoList
      .filter((item)=> !item.deleted)
      .map((item, index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item}
            onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}
          />
        </li>
      )
    })

    return (
      <div className="App">
        <h1 className="myTodo">我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={ this.state.newTodo }
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}
          />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    )
  }
  
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      delete: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  delete(e, todo){
    todo.deleted = true
    this.setState(this.state)
  }
}


let id = 0;
function idMaker(){
  id += 1
  return id
}

