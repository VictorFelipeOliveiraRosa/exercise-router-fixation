import React from 'react';
import { useParams } from 'react-router-dom';

const Users = ({ greetingMessage = 'Hi There' }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2> Users </h2>
      <p>
        {' '}
        {greetingMessage}, {id} this is my awesome Users component{' '}
      </p>
    </div>
  );
};

export default Users;
