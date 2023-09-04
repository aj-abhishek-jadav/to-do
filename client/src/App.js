import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import React from 'react';

function App() {
  return (
    <div>
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
