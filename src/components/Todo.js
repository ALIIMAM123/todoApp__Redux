import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {/* <figcaption>My TodoList</figcaption> */}
          <h1 className="heading">TodoList</h1>
          <div className="addItems">
            <input
              type="text"
              value={inputData}
              placeholder="Add Items...."
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash alt"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItem">
              <button className = "btn deleteAll" data-sm-link-text = "remove All" 
                onClick = {() => dispatch(removeTodo())}
              ><span>Delete All</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
