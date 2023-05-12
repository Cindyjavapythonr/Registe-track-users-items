import React, { createContext, useState } from 'react';

// Create a UserContext hook for passing users information to the children
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
  
    setUsers([...users, user]);

    //Fetch
    fetch(
      "http://localhost:5000/recipients/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      }
    ).then(() => {
      alert(`${user.name} has been added`)
      window.location.reload(true)
    })
  };

  return (
    <UserContext.Provider value={[users, addUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
