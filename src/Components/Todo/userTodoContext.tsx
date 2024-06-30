import { useContext } from "react";
import { TodoContext } from "../../Context/TodoProvider";

const userTodoContext = () => {
    const context = useContext(TodoContext)
    return context
}
export default userTodoContext