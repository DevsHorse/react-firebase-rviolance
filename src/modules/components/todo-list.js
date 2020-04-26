import TodoListItem from './todo-list-item';
import React from 'react';
import { Link } from 'react-router-dom';


const TodoList = props => {

  let listBtn = props.outPage === '/home' ? 'Edit items' : 'Cancel';
  const redirectTo = props.outPage === '/home' ? '/edit' : '/home';
  const bgColor = redirectTo === '/home' ? 'btn-danger' : 'btn-dark';

  let items = [];

  if (props.todos) {
    let timeArr = [];
    for (let key of Object.keys(props.todos)) {
      timeArr.push(props.todos[key].deadline);
    }

    timeArr.sort();

    timeArr.forEach(item => {
      for (let key of Object.keys(props.todos)) {
        if (props.todos[key].deadline === item) {
           items.push(<TodoListItem
                        key={key}
                        options={props.todos[key]}
                        id={key}
                        userId={props.userId}
                        prevPath={props.outPage}/>);
        }
      }
    });
  }
  
  let message = items.length === 0 ?
   (<div style={{color: 'black', textAlign: 'center'}}>No todos...</div>) : items;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul style={{ listStyle: 'none' }}>

            <li className="mb-2">
              <div className="row justify-content-between align-items-center text-white">
                <Link to={redirectTo} style={{textDecoration: 'none'}}>
                  <button className={'btn ' + bgColor + ' btn-block'}>{listBtn}</button>
                </Link>
              </div>
            </li>

            {message}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;