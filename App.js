// import React from "react";
import ReactDOM from "react-dom/client";

//jsx - HTML Like or XML-Like syntax

//JSX (Transpiled before it reached to the JS) - PARCEL - Babel(babel do this transpilation which is provided by Parcel)
// const jsxHeading = <h1 id="heading">Namaste React using JSX💖</h1>;
// console.log(jsxHeading);

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

const number = 10000;
const HeadingComponent = () => (
  <div>
    <Title />
    {number}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
