import React, { useState } from "react";

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => React.ReactNode | null;
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <React.Fragment>{children({ count, setCount })}</React.Fragment>;
};
