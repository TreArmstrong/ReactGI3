import React from 'react';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();
  
  return <div>Details of Todo Item with ID: {id}</div>;
};

export default TodoDetail;
