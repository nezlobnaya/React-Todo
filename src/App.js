import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks =[{
    name: 'Jogging in our park',
    id: 1,
    completed: false
  },
  {
    name: 'Workout',
    id: 2,
    completed: false
  },
  {
    name: 'Matcha Protein Shake',
    id: 3,
    completed: false
  },
  {
    name: 'Coding the Todo project',
    id: 4,
    completed: false
  },
  {
    name: 'Refactor the code using hooks',
    id: 5,
    completed: false
  },
  {
    name: 'Do the stretch',
    id: 6,
    completed: false
  }
];



class App extends React.Component {
  constructor() {
    super();
    this.state ={
       tasks
    }
  }


  toggleItem =(e,itemId) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(item.id === itemId) {
          return {...item, completed: !item.completed};
        } else {
          return item;
        }
      })
    })
  };

  clearCompleted = e => {
    e.preventDefault()

    this.setState ({
      tasks: this.state.tasks.filter(item => {
        return !item.completed
      })
    })
  }

  addItem = (e, itemName) => {
    const newTask = {
      id: Date.now(),
      name: itemName,
      purchased: false
    }
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div className='App'>
       <h1>↓ Carpe Diem! ↓</h1>
          <div className='header'>
            <TodoForm tasks={this.state.tasks} addItem={this.addItem} />
          </div>
      
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem} 
          clearCompleted={this.clearCompleted}
        />
     </div>    
    );
  }
}

export default App;
