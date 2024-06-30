import TodoFrom from "./Components/Todo/TodoFrom";
import TodoProvider from "./Context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoFrom />
    </TodoProvider>
  );
}

export default App;
