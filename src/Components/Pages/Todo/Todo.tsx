import React, { useState } from "react";

interface Props {}

export const Todo: React.FC<Props> = () => {
  const [value, setValue] = useState<string>('');
  return (
    <React.Fragment>
      <h1>Todo List</h1>

      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </React.Fragment>
  );
};
