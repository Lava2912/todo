import { useRef } from "react";
import './NewToDo.css'
interface NewToDoProps{
    onAddToDo : (toDoText: string) => void;
}
const  NewTodo: React.FC<NewToDoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler =(event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddToDo(enteredText);
    };
    return (
        <form onSubmit={todoSubmitHandler}>
        
         <div className="form-control">
         <div className="input-container">
         <input placeholder='to-do text' className="input-field" type='text' id='to-do text' ref={textInputRef}/>
         <button type ="submit" className="input-button">Add Task</button>
          </div>
         </div>
         
        </form>
    )
};

export default NewTodo;