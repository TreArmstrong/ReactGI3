import React from 'react';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();
  // Here fetch or pass the todo data as needed
  return <div>Details of Todo Item with ID: {id}</div>;
};

export default TodoDetail;
