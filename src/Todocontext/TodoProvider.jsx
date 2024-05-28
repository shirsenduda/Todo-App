/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
const Todocontext = createContext();
const TodoProvider = ({children}) => {
  const [Usertext, setUsertext] = useState("");
  const [Update, setUpdate] = useState(true);
  const [Edit, setEdit] = useState(null);
  const [data, setdata] = useState([]);

  return (
    <>
      <Todocontext.Provider
        value={{
          Usertext,
          setUsertext,
          Update,
          setUpdate,
          Edit,
          setEdit,
          data,
          setdata,
        }}
      >
        {children}
      </Todocontext.Provider>
    </>
  );
};

export default TodoProvider;
export { Todocontext };
