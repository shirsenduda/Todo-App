/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Todo-App.css";
import TodoList from "../Todo-List/Todo-List";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  // userSighup State
  const [Usertext, setUsertext] = useState("");
  const [Update, setUpdate] = useState(true);
  const FormHandler = (e) => {
    setUsertext(e.target.value);
  };

  const AllText = { id: uuidv4(), title: Usertext, complete: false };
  const [Edit, setEdit] = useState(null);

  // Submit Fuction
  const [data, setdata] = useState([]);
  const Submit = () => {
    if (!Update) {
      setdata(
        data.map((newElem) => {
          if (newElem.id === Edit) {
            return { ...newElem, title: Usertext };
          }
          return newElem;
        })
      );
      setUpdate(true)
      setUsertext("");
    } else {
      if (Usertext === "") {
        alert("empty");
      } else if (data === data) {
        setdata([...data, AllText]);
        setUsertext("");
      }
    }
  };

  // delete all function
  const handleDelAll = (item) => {
    setdata([]);
  };

  // const UpdateButton = ()=>{
  //   setUpdate(!false)
  // }
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
        <button className="button" onClick={() => Submit()}>
          {Update === true ? "Add" : "Update"}
        </button>
        {/* data={data}  */}
        <div className="tomain">
          <TodoList
            data={data}
            setdata={setdata}
            setUsertext={setUsertext}
            setUpdate={setUpdate}
            setEdit={setEdit}
          />
          <button className="buttontwo" onClick={handleDelAll}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
