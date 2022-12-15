import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre>...</pre>

      <ul>
        {/* {todos.map(({ title, id, completed }) => (
          <li key={id}>
            <strong>{completed ? "DONE" : "PENDING"} </strong>
            {title}
          </li>
        ))} */}
        <li>{todo?.title}</li>
      </ul>
      <button
        disabled={todoId === 1}
        onClick={() => {
          setTodoId(todoId - 1);
        }}
      >
        Previous TODO
      </button>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
        }}
      >
        Next TODO
      </button>
    </>
  );
};
