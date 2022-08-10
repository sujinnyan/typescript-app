import React, {useState, useEffect, useRef } from 'react'
import { Todo } from '../models/models'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import './style.css'
import TodoList from './TodoList'
type Props= {
    todo: Todo,
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
        };

        const handleDelete = (id: number) => {
            setTodos(todos.filter((todo)=>todo.id !== id));
        };

        const handleEdit = (e:React.FormEvent, id: number) => {
            e.preventDefault();
        

        setTodos(todos.map((todo)=> (
            todo.id === id ? {...todo,todo:editTodo}:todo
        )));
        setEdit(false);
        };

        useEffect(() => {
            inputRef.current?.focus();
            
        }, [edit]);

        const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="todos__single" onSubmit={(e) =>handleEdit(e,todo.id)}>


            {edit ? (
            <input
            ref={inputRef}
              value={editTodo}
              onChange={(e) => seteditTodo(e.target.value)}
              className="todos__single--text"
             
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
       
       

            <div>
                <span className="icon"
                onClick={() => {
                    if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
                }}
                >

                    <AiOutlineEdit/></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><AiOutlineDelete/></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><AiOutlineCheckCircle/></span>
            </div>
        </form>
    )
}

export default SingleTodo
