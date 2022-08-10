import React, { useRef } from 'react'
import './style.css'
import {BiDownArrowAlt} from 'react-icons/bi'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<Props>  = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
      className="input"
      onSubmit={(e)=>{
          handleAdd(e)
          inputRef.current?.blur();
        }}
    >
      <input
      ref={inputRef}
        type="input"
        placeholder="Add your todo's here"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        <BiDownArrowAlt size="25"/>
      </button>
    </form>
    );
};

export default Input
