import React from 'react';
import fire from 'firebase';
import { Link, useHistory } from 'react-router-dom';

const TodoHeader = props => {

  let history = useHistory();

  const logOut = () => {
    fire.auth().signOut();
  };

  const createBtnData = {
    pathname: "/edit-or-create",
    state: {
      prevPath: history.location.pathname,
      mode: 'create',
      item: null
    }
  }

  return (
    <div className="row align-items-center text-center text-white justify-content-between mb-5 gradient">
      <div className="col">
        <h1>RViolance</h1>
      </div>
      <div className="col">
        <Link to={createBtnData}><button className="btn text-white btn-dark createBtn">Add new</button></Link>
      </div>
      <div className="col">
        <div className="row justify-content-center align-items-center"> 
          <div className="user-name  font-size-18">{props.userName}</div>
          <button className="btn btn-dark btn-sm ml-2" onClick={logOut}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;