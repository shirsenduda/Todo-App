/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import TodoProvider from "./Todocontext/TodoProvider";
const App = () => {
  return (
    <>
      <TodoProvider>
        <div className="main">
          <Home />
        </div>
      </TodoProvider>
    </>
  );
};

export default App;
