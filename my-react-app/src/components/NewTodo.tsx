import React, { useRef } from "react";

type PropsInfo = {
    addTodo : (todoText : string) => void;
};

const NewTodo: React.FC<PropsInfo> = props => {
    // --- using HTMLInputElement is great because it makes our code clear
    const inputEl = useRef<HTMLInputElement>(null);

  // --- using React.FormEvent is great because it can use autocompletion on preventDefault
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // using ! we tell typescript that we are sure inputEl.current exist
    props.addTodo(inputEl.current!.value);
    
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputEl} />
      </div>
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default NewTodo;
