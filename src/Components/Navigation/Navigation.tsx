import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/todo">ToDo</Link>
        </li>
      </ul>
    </nav>
  );
};
