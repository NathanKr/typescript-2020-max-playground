import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewTodo from './components/NewTodo';

export type ToDo = {
  id: string , text: string
}



function App() {
  const [todos , setTodos] = useState<ToDo[]>([]);

  const deleteById = (id : string) => {
    const tmpTodos = [...todos];
    // --- all item with this condition will be return
    setTodos(tmpTodos.filter(todo => todo.id !== id));
    }
   

  const addTodo = (todoText : string) => {
    const tmpTodos :  ToDo []= [...todos];
    tmpTodos.push({id: Math.random().toString(), text : todoText});
    setTodos(tmpTodos);
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo}/>
      <br/>
      <ToDoList todos={todos} deleteById={deleteById}/>
    </div>  
  );
}

export default App;
