import { ReactNode, createContext, useReducer } from "react";

type TTodoProps = {
  children: ReactNode;
};

interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface IAction {
  type: string;
  payload: ITodo |string;
}
const initialState: ITodo[] = [];

const reducer = (currentState: ITodo[], action: IAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "todoComplete":
      return currentState?.map((item) =>
        item?.id === action.payload
          ? { ...item, isCompleted: !item?.isCompleted }
          : item
      );

    default:
      return currentState;
  }
};

export const TodoContext = createContext<
  { state: ITodo[]; dispatch: React.Dispatch<IAction> } | undefined
>(undefined);
const TodoProvider = ({ children }: TTodoProps) => {
  // create useReducer

  const [state, dispatch] = useReducer(reducer, initialState);
  const info = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={info}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
