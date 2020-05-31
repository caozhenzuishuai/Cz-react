import React, { Component } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import List from "./pages/List";
import "./App.css";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", isCompleted: false },
      { id: 2, name: "睡觉", isCompleted: false },
    ],
  };

  id = 3;
  addTodo = (name) => {
    const { todos } = this.state;
    this.setState({
      todos: [{ id: this.id++, name, isCompleted: false }, ...todos],
    });
  };
  updateTodo = (id, isCompleted) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todos.id === id) {
          return {
            id: todos.id,
            name: todos.name,
            isCompleted,
          };
        }
        return todo;
      }),
    });
  };
  checkAll = (isCheckAll) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        return {
          id: todo.id,
          name: todo.name,
          isCompleted: isCheckAll,
        };
      }),
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };
  delCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.isCompleted;
      }),
    });
  };

  render() {
    const { todos } = this.state;

    const allCount = todos.length;

    const completedCount = todos.reduce((p, c) => {
      return p + (c.isCompleted ? 1 : 0);
    }, 0);
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            delTodo={this.delTodo}
          />
          <Footer
            allCount={allCount}
            completedCount={completedCount}
            checkAll={this.checkAll}
            delCompletedTodos={this.delCompletedTodos}
          />
        </div>
      </div>
    );
  }
}

export default App;
