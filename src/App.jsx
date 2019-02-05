import React from 'react';

import Summary from './Summary';
import TodoList from "./TodoList";
import Todo from './Todo';

import './app.css';
import TodoListContainer from './TodoListContainer';

const App = () => (
  <div className="app">
    <h1>My Todo App</h1>
    <Summary todosCount={5} completedTodosCount={2} />
    <TodoListContainer />
  </div>
);

export default App;