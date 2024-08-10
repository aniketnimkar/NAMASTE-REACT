import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const Error = useRouteError();
  return (
    <div>
      <h1>OOPSS!!!!!!!!!</h1>
      <h2>Something went wrong!!!</h2>
      <h3>
        {Error.status}: {Error.statusText}
      </h3>
    </div>
  );
};

export default Error;
