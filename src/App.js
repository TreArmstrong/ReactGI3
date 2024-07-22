import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import MovieSearch from './MovieSearch';
import MovieDetail from './MovieDetail';
import CounterApp from './CounterApp';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/counter">Counter App</Link>
            </li>
            <li>
              <Link to="/movies">Movie Search</Link>
            </li>
          </ul>
        </nav>

        <Routes> 
          
          <Route path="/" element={<TodoList />} /> 
          <Route path="/todos/:id" element={<TodoDetail />} /> 

          
          <Route path="/counter" element={<CounterApp />} /> 

          
          <Route path="/movies" element={<MovieSearch />} /> 
          <Route path="/movies/:id" element={<MovieDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
