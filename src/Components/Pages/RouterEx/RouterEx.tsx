import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const RouterEx: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Test">Test</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
