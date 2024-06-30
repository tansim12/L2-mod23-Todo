import TodoFrom from "./Components/Todo/TodoFrom";
import TodoList from "./Components/Todo/TodoList";
import TodoProvider from "./Context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoFrom />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
