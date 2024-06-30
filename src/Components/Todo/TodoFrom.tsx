import React, { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoProvider";
import userTodoContext from "./userTodoContext";
import { TEvent } from "../../Interface/CommonTypes";

const TodoFrom = () => {
  const { state, dispatch } = userTodoContext();
  const [task, setTask] = useState("");

  const handleSubmit = (e: TEvent) => {
    e.preventDefault();
    const todoData = {
      id: Math.random().toString(32).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    
    dispatch({type:"addTodo", payload:todoData})
  };

  console.log(state);
  
  return (
    <div>
      <h1>Todo From </h1>

      <form onSubmit={handleSubmit}>
        <input
        className="border border-red-400"
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          id="todo"
          placeholder="todo"
        />
        <input className="border border-black m-3" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TodoFrom;
