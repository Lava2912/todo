import React, { useState } from 'react';
import './App.css';
import TodoList from './component/ToDoList';
import NewTodo from './component/NewTodo';
import {Todo} from './component/todo.model'
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const toDoHandler=(text:string)=>{
    setTodos(prevstate=> [...prevstate, {id: Math.random().toString(), text: text}]);
    }
    const todoDeleteHandler = (todoId: string) => {
      setTodos(prevState => {return prevState.filter(todo => todo.id!==todoId);
      });
    };
  return (
    <div className="App">
     
      <NewTodo onAddToDo={toDoHandler}/>
      <TodoList items= {todos} onDeleteToDo={todoDeleteHandler}/>
      
    </div>
  );
}

export default App;
