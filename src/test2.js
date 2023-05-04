import React, { useContext } from 'react';
import { UserContext } from './UserProvider'; //file name OR function name

const UserPage = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);

  // Render user-related data and functions
  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logoutUser}>Log out</button>
        </div>
      ) : (
        <div>
          <p>Please log in:</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => loginUser('testuser', 'testpassword')}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};
