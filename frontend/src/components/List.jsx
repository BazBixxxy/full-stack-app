import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { baseURL } from "../utilities/constant";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };


  return (
    <li>
      {task}
      <div className="icon-holder">
        <BiEditAlt
          onClick={() => {
            updateMode(id, task);
          }}
          className="icon"
        />
        <BsTrash onClick={removeTask} className="icon" />
      </div>
    </li>
  );
};

export default List;
