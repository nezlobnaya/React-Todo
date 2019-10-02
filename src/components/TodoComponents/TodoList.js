// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return ( 
        <div className='tasks-list'>
            <h2>To Do List ===></h2>
         <div>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
         </div>
        </div>
     );
}
 
export default TodoList;
