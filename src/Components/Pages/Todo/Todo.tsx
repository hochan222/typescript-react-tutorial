import React, { useState } from "react";
import "./Todo.css";
import { TodoList } from "./TodoList";

interface Props {}

interface ITodo {
  text: string;
  complete: boolean;
}

type FormElem = React.FormEvent<HTMLFormElement>;

export const Todo: React.FC<Props> = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([
    { text: "Learn about React", complete: false },
    { text: "Meet friend for lunch", complete: false },
    { text: "Build really cool todo app", complete: false },
  ]);

  const handleSubmit = (e: FormElem): void => {
    // preventDefault will stop the form from doing a refresh when submitted
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todoback">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>

      <section className="todo-list">
        {todos.map((todo: ITodo, index: number) => (
          <TodoList
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </section>
    </div>
  );
};
