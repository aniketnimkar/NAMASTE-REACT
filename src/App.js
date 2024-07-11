import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// JSX (Transpiled before it reaches to the JS) - PARCEL - Babel (babel does this transpilation which is provided by Parcel)
// const jsxHeading = <h1 id="heading">Namaste React using JSX💖</h1>;
// console.log(jsxHeading);

// console.log(resData.info.costForTwoString);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
