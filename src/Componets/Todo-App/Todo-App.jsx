/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Todo-App.css";
import TodoList from "../Todo-List/Todo-List";
import { v4 as uuidv4 } from "uuid";
import { Todocontext } from "../../Todocontext/TodoProvider";
const TodoApp = () => {
  const {
    Usertext,
    setUsertext,
    Update,
    setUpdate,
    Edit,
    setEdit,
    data,
    setdata,
  } = useContext(Todocontext);

  // userSighup State

  const FormHandler = (e) => {
    setUsertext(e.target.value);
  };

  const AllText = { id: uuidv4(), title: Usertext, complete: false };

  // Submit Fuction
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
      setUpdate(true);
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
