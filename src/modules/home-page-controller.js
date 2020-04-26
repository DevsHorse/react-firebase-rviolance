import TodoHeader from './components/todo-header';
import TodoList from './components/todo-list';
import React, { useEffect, useState } from 'react';
import fire from 'firebase';
import { useHistory } from 'react-router-dom';

const HomePageController = props => {

  let [options, setOptions] = useState({});
  let history = useHistory();

  useEffect(() => {
    if (!props.userId) {
      history.push('/login');
    } else {
      fire.database().ref('/users/' + props.userId).on('value', snapshot => {
        setOptions({
           todos: snapshot.val().todos,
           name: snapshot.val().name + ' ' + snapshot.val().lastName
          });
      });
    }
  }, []);

  return (
    <section className="todo-page section">
      <TodoHeader userName={options.name} />
      <TodoList outPage={props.outPage} todos={options.todos} userId={props.userId}/>
    </section>
  );
}

export default HomePageController