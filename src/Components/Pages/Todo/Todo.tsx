import React, { useState } from "react";

interface Props {}

interface ITodo {
  text: string;
  complete: boolean;
}

type FormElem = React.FormEvent<HTMLFormElement>;

export const Todo: React.FC<Props> = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

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

  return (
    <React.Fragment>
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

      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>{todo.text}</div>
        ))}
      </section>
    </React.Fragment>
  );
};
