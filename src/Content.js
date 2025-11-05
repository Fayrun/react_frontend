import React, { memo,useReducer,useMemo,useState } from "react";
/* useReducer: giúp quản lý state phức tạp hơn, gồm 4 bước chính:
  1.Init State: 0 
  2.Actions: Up(state +1 ),Down(state -1)
  3.Reducer
  4.Dispatch

  useReducer thay đổi initState dựa vào action (thường sẽ là những case action) để quyết định thay đổi state như thế nào
  useReducer trả về 2 giá trị: state hiện tại và hàm dispatch để gửi action đến reducer
  useState thay đổi state theo dạng cập nhật state,còn useReducer thay đổi state dựa vào action gửi đến reducer
*/ 

//init State
const initState = {
  job:'',
  jobs:[]
}
//Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

//Reducer
const reducer = (state,action) => {
  let newState;
  switch(action.type){  
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, state.job],
        job: ''
      };
      break;
    case DELETE_JOB:
      newState = {
        ...state,
        jobs: state.jobs.filter((_, index) => index !== action.payload)
      };
      break;
    default:
      newState = state;
  }
  return newState;
}

function Content() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch({ type: SET_JOB, payload: value });
  };

  const handleAddJob = () => {
    dispatch({ type: ADD_JOB });
  };

  const handleDeleteJob = (index) => {
    dispatch({ type: DELETE_JOB, payload: index });
  };

  return (
    <div>
      <h3>Todo List Jobs</h3>
      <input
        value={job}
        onChange={handleInputChange}
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteJob(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(Content);