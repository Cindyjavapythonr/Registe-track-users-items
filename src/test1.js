import React, { createContext, useState } from 'react';

// Create a new context for user-related data
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (username, password) => {
    // Perform login logic and set the user state
    setUser({ username });
  };

  const logoutUser = () => {
    // Perform logout logic and clear the user state
    setUser(null);
  };

  return (
    // Provide the user state and login/logout functions to child components through the context provider
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
