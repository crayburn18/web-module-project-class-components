import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoList = [
  {
    name:'',
    id:'',
    completed:false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  toggleItem = (id) => {
    const newTodo = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return (item);
      }
    });

    this.setState({
      todoList: newTodo
    });
  }

  addItem = (title) => {
    const newItem = {
      name:title,
      id:Date.now(this.state),
      completed: false
    };
    
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  clearCompleted = () => {
    const newTodo = this.state.todoList.filter(item => {
      return(item.completed === false);
    });


    this.setState({
      todoList: newTodo
    })
  }

  render() {
    return (
      <div>
        <div>
           <h1>Todo List</h1>
           <TodoForm addItem={this.addItem}/>
         </div>
        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todoList={this.state.todoList} />
       </div>
    );
  }
}

export default App;
