import React from 'react'
import './Todo.css';

const Todo = props => {
    return ( 
        <div className={`item${props.item.completed ? 'completed' : ''}`}
            onClick ={(e) => props.toggleItem(e,props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
     );
}
 
export default Todo;