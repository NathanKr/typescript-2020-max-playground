import React from "react";

// todo nath :  do we declare that ToDoList is of type React.FC
//              or that the function return React.FC
// using React.FC is not a must but it is good practice
// it will give an error in case you forget to return JSX

type PropsInfo = {
  todos: { id: string; text: string }[];
  deleteById : (id : string) => void
};


// it is working but how does he know that <PropsInfo> refer to the props
const ToDoList: React.FC<PropsInfo> = (props) => {
  const elements = props.todos.map((it) => (
    <li key={it.id}>
      <span>{it.text}</span>
      <button onClick={() =>{
        props.deleteById(it.id);
      }}>Delete</button>
    </li>
  ));
  return <div>{elements}</div>;
};

export default ToDoList;
