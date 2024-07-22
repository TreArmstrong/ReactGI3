import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([{ id: 1, task: 'Sample Task' }]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), task }]);
    setTask('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.task}</Link>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
