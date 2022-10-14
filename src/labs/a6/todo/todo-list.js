import React from "react";

import TodoItem from "./todo-item";
import todos from "./todos.json"
const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(
                            <React.Fragment key={todo.title}>
                                <TodoItem todo={todo}/>
                            </React.Fragment>);
                    })
                }
            </ul>
        </>

    );
}
export default TodoList;
