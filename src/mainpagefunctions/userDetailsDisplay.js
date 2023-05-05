import React, { useContext } from 'react';
import { UserContext } from './userContext';

// Define a component to display user details
export const UserDetailsDisplay = () => {
    const [users] = useContext(UserContext);
  
    return (
      <div>
          <h2>All User Details:</h2>
          {users.length > 0 ? (
              <ul>
                  {users.map((user, index) => (
                      <div key={index}>
                          <p>Name: {user.name}</p>
                          <p>Email: {user.email}</p>
                          <p>Phone: {user.phone}</p>
                          <hr />
                      </div>
                  ))}
              </ul>
          ) : (
              <p>No user informations found</p>
          )}
      </div>
    );
  };