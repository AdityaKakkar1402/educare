import React from "react";
import "./Todo.css"
import TodoApp from "./components/TodoApp";

function Todo() {
  return (
    <div className="App1">
      <span className="title1">Your Todo List</span> <br />
      <TodoApp />
    </div>
  );
}

export default Todo;
