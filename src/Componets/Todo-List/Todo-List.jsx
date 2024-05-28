/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Todo-List.css";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const TodoList = ({ data, setdata ,setUsertext , setUpdate , setEdit}) => {
  
  const handleDel = (item) => {
    const updateFilter = data.filter((filterItem) => item != filterItem.id);
    setdata(updateFilter);
  };
  const handleTick = (item) => {
    setdata(
      data.map((compItem) => {
        if (compItem.id === item) {
          return { ...compItem, complete: !compItem.complete };
        }
        return compItem;
      })
    );
  };

  const handleEdit = (id)=>{
    
    const findItem = data.find((item)=>{
      return id === item.id;
    });
    setUsertext(findItem.title)
    setUpdate(false)
    setEdit(id)
  }

  return (
    <>
      <div className="tomaintwo">
        {data.map(function (item, id) {
          return (
            <div className="error" key={item.id}>
              <div className="error__icon">
                <div className="checkbox-wrapper">
                  <label
                    className="check-box"
                    onClick={() => handleTick(item.id)}
                  >
                    {item.complete ? <TiTick /> : ""}
                  </label>
                </div>
              </div>
              <div className="error__title">{item.title}</div>
              {item.complete ? <div className="line"></div> : ""}

              <div className="edit" >
                <FaEdit onClick={() => handleEdit(item.id)}/>
              </div>
              <div className="error__close">
                <MdDelete onClick={() => handleDel(item.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
