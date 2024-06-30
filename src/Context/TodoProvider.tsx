import { ReactNode, createContext } from "react";

type TTodoProps = {
  children: ReactNode;
};

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: TTodoProps) => {
  const info = {
    todoTitle: "this is a todo title",
  };
  return <TodoContext.Provider value={info}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
