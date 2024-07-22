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

        <Routes> {/* Changed from Switch to Routes */}
          {/* Route for the Todo List */}
          <Route path="/" element={<TodoList />} /> {/* Changed from component to element */}
          <Route path="/todos/:id" element={<TodoDetail />} /> {/* Changed from component to element */}

          {/* Route for the Counter App */}
          <Route path="/counter" element={<CounterApp />} /> {/* Changed from component to element */}

          {/* Route for Movie Search App */}
          <Route path="/movies" element={<MovieSearch />} /> {/* Changed from component to element */}
          <Route path="/movies/:id" element={<MovieDetail />} /> {/* Changed from component to element */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
