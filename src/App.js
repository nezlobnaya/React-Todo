import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks =[{
task: 'Jogging in our park',
    id: 1,
    completed: false
  },
  {
    task: 'Workout',
    id: 2,
    completed: false
  },
  {
    task: 'Matcha Protein Shake',
    id: 3,
    completed: false
  },
  {
    task: 'Coding the Todo project',
    id: 4,
    completed: false
  },
  {
    task: 'Refactor the code using hooks',
    id: 5,
    completed: false
  },
  {
    task: 'Do the stretch',
    id: 6,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
       tasks
    }
  }


  render() {
    console.log('rendering...')
    return (
      <div className='App'>
          <div className='header'>
          <h2>Carpe Diem!</h2>
          <TodoForm />
          </div>
        <TodoList tasks={this.state.tasks} />
     </div>    
    );
  }
}

export default App;
