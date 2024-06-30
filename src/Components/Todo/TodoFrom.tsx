import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoProvider';
import userTodoContext from './userTodoContext';

const TodoFrom = () => {
    
    const {todoTitle} = userTodoContext()

    console.log(todoTitle);
    
    
    return (
        <div>
            hello
        </div>
    );
};

export default TodoFrom;