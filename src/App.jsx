import React from 'react';

import SummaryContainer from './SummaryContainer';
import TodoListContainer from './TodoListContainer';
import AddTodoContainer from './AddTodoContainer';

import './app.css';

const App = () => (
  <div className="app">
    <h1>My Todo App</h1>
    <SummaryContainer />
    <AddTodoContainer />
    <TodoListContainer />
  </div>
);

export default App;