import React from "react";
import './Todo.css';

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
      localStorage.setItem('myValueInLocalStorage', event.target.value)
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addItem(event, this.state.value)

    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder='Something that needs to be done...'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add a task</button>
      </form>
    );
  }
}

export default TodoForm;