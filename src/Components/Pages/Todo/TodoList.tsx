import React from "react";

interface Props {
  index: number;
  todo: {
    text: string;
    complete: boolean;
  };
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export const TodoList: React.FC<Props> = ({
  index,
  todo,
  completeTodo,
  removeTodo,
}) => {
  return (
    <React.Fragment>
      <div key={index} style={{ display: "flex" }}>
        <div style={{ textDecoration: todo.complete ? "line-through" : "" }}>
          {todo.text}
        </div>
        <button type="button" onClick={() => completeTodo(index)}>
          {todo.complete ? "Incomplete" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </React.Fragment>
  );
};
