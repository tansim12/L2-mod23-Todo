import React from "react";
import userTodoContext from "./userTodoContext";
interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const constActionType = {
  ADD_TODO: "addTodo",
  TODO_COMPLETE: "todoComplete",
};
const TodoList = () => {
  const { state, dispatch } = userTodoContext();
  console.log(state);

  return (
    <div>
      {state?.map((item: ITodo, i: string) => (
        <p
          onClick={() =>
            dispatch({ type: constActionType.TODO_COMPLETE, payload: item?.id })
          }
          key={i}
          className={`cursor-pointer ${item?.isCompleted && "line-through"}`}
        >{`${i + 1}. ${item?.title}`}</p>
      ))}
    </div>
  );
};

export default TodoList;
