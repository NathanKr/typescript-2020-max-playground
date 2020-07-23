import React from "react";
import { ToDo } from "../App";


type PropsInfo = {
  todos: ToDo [];
  deleteById: (id: string) => void;
};

// --- use PropsInfo as generic function argument will set props type to PropsInfo
const ToDoList: React.FC<PropsInfo> = (props) => {
  const elements = props.todos.map((it) => (
    <li key={it.id}>
      <span>{it.text}</span>
      {/* bind is used because we need to pass an argument */}
      <button onClick={props.deleteById.bind(null, it.id)}>Delete</button>
    </li>
  ));
  return <div>{elements}</div>;
};

export default ToDoList;
