import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire-config';

const TodoListItem = props => {
 
  let item = props.options;
  let bgColor = item.done ? 'bg-success' : 'bg-secondary';
  let editColor = '';
  let deleteColor = '';

  let deadlineStr = item.deadline.split('').filter(l => l !== 'T').join('');
  let time = Array.from(deadlineStr.matchAll(/([0-9]{4}-[0-9]{2}-[0-9]{2})([0-9]{2}:[0-9]{2})/g));

  let editBtnData = {
    pathname: "/edit-or-create",
    state: {
      prevPath: props.prevPath,
      mode: 'edit',
      id: props.id,
      item: props.options
    }
  };

  const deleteBtn = e => {
    e.preventDefault();
    fire.database().ref('/users/' + props.userId + '/todos/' + props.id).remove();
  };

  const editButtons = () => {
    if (item.done) {
      editColor = 'bg-dark';
      deleteColor = 'bg-danger';
    } else {
      editColor = 'bg-success';
      deleteColor = 'bg-dark';
    }
    if (props.prevPath === '/home') return null;
    if (props.prevPath === '/edit') return (
      <div className="row justify-content-end">
        <div className="col">
          <Link to={editBtnData}>
            <button 
              className={`btn ${editColor} text-white fz-14 mr-1`} 
              style={{padding: '1px 5px'}}>Edit</button>
          </Link>
          <button
            style={{padding: '1px 5px'}} 
            className={`btn ${deleteColor} fz-14 text-white`} 
            onClick={deleteBtn}>Delete</button>
        </div>
      </div>
      
    );
  };

  const threeDots = mode => {
    if (item.description.length > 18 && mode !== 'more') {
      return (
        <span>
          {item.description.substring(0, 18)}
          <a
            href='#'
            style={{color: '#fff', textDecoration: 'none'}} 
            onClick={
              e => {
                if (e.target.text === '...') {
                  e.target.text = item.description.substring(18);
                } else {
                  e.target.text = '...';
                }
            }}>...</a>
        </span>
      );
    } else {
      return (<span>{item.description}</span>);
    }
  } 
 
  return (
    <li className="mb-2 fz-14">
      <div
        style={{minHeight: '20px'}}
        className={`row justify-content-start align-items-center rounded p-1 text-white ${bgColor}`}>

        <div className="col">
          <div className="custom-control custom-checkbox d-inline-block">
            <input type="checkbox"
              className="custom-control-input"
              id={props.id}
              name="title"
              onChange={(e) => {
                fire.database().ref('/users/' + props.userId + '/todos/' + props.id).update({
                      done: e.target.checked
                });
              }}
              checked={item.done}/>
            <label className="custom-control-label" htmlFor={props.id}>{item.title}</label>
          </div>
        </div>
        
        <div className="col">
          <div className="">{threeDots()}</div>
        </div>
        
        
        <div className="col">
          <div className="row justify-content-center">
            <div className="">{time[0] ? time[0][2] + ' ' + time[0][1] : null}</div>
          </div>
        </div>
        
        {editButtons()}
      </div>
    </li>
  );
};


export default TodoListItem;