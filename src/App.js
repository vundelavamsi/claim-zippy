import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: { title: "", description: "" },
      selectedTaskId: null,
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/tasks");
      const data = await response.json();
      this.setState({ tasks: data.tasks });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newTask: { ...prevState.newTask, [name]: value },
    }));
  };

  handleCreateTask = async () => {
    try {
      await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.newTask),
      });
      this.fetchTasks();
      this.setState({ newTask: { title: "", description: "" } });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  handleUpdateTask = async () => {
    const { selectedTaskId, newTask } = this.state;
    if (!selectedTaskId) {
      return;
    }

    try {
      await fetch(`http://localhost:3001/tasks/${selectedTaskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      this.fetchTasks();
      this.setState({
        newTask: { title: "", description: "" },
        selectedTaskId: null,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  handleEditTask = (taskId) => {
    const selectedTask = this.state.tasks.find((task) => task.id === taskId);
    this.setState({ newTask: { ...selectedTask }, selectedTaskId: taskId });
  };

  handleDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });
      this.fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <div className="header">
          <h1>Task Manager</h1>
        </div>
        <div className="container">
          <div className="form-container">
            <h2>Create New Task</h2>
            <form className="task-form">
              <div>
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={this.handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  name="description"
                  value={newTask.description}
                  onChange={this.handleInputChange}
                  className="form-input"
                />
              </div>
              <button
                type="button"
                onClick={this.handleCreateTask}
                className="form-button"
              >
                Create Task
              </button>
              <button
                type="button"
                onClick={this.handleUpdateTask}
                className="form-button"
              >
                Update Task
              </button>
            </form>
          </div>

          <div>
            <h2>Task List</h2>
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <div className="task-details">
                    <h4>{task.title}</h4>
                    {task.description}
                  </div>
                  <div className="task-buttons">
                    <button
                      onClick={() => this.handleEditTask(task.id)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.handleDeleteTask(task.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
