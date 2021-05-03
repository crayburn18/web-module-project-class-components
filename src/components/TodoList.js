import React from "react";

import Item from "./Todo";

const TodoList = props => {

  const handleClick = ()=>{
    props.clearCompleted();
  }

  return (
    <div className="todo-list">
      {props.todoList.map(item => (
        <Item key={item.id} toggleItem={props.toggleItem} item={item} />
      ))}
      <button onClick={handleClick}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;