/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Todo-App.css";
import TodoList from "../Todo-List/Todo-List";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  // userSighup State
  const [Usertext, setUsertext] = useState("");
  const FormHandler = (e) => {
    setUsertext(e.target.value);
  };

  // Submit Fuction
  const [data, setdata] = useState([]);

  const AllText = { id: uuidv4(), title: Usertext , complete : false };

  const Submit = () => {
    if (Usertext === "") {
      alert("empty");
    } else if (data === data) {
      setdata([...data, AllText]);
      setUsertext("");
      console.log(data);
    }
  };

  // delete all function
  const handleDelAll = (item)=>{
    setdata([])
  }
  return (
    <>
      <div className="todo">
        <h2>Todo</h2>

        <input
          className="input-style"
          id="text"
          value={Usertext}
          type="text"
          onChange={FormHandler}
        />
        <button className="button" onClick={Submit}>
          Add
        </button>
        {/* data={data}  */}
        <div className="tomain">
          <TodoList data={data} setdata={setdata} />
          <button className="buttontwo" onClick={handleDelAll}>Remove All</button>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
