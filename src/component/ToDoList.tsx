import React from 'react';
import './ToDoList.css'
interface ToDoList{
    items: {id:string, text: string}[];
    onDeleteToDo:(id :string) => void; 
}
const TodoList: React.FC<ToDoList>=(props) => {
   
   return <ul>
   {props.items.map(todo => (<li key = {todo.id}>
    <span>{todo.text}</span>
    <button onClick={props.onDeleteToDo.bind(null, todo.id)}>Delete Task</button>
    </li>))} 
    </ul>
};

export default TodoList;