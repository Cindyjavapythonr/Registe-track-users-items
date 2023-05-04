import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';

// Define a component to capture user details
export const UserDetails = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [num_of_family_members, setFamilyNum] = useState('');
    const [nationality, setNation] = useState('');
    const [identification_numbers, setID] = useState('');
    const [email, setEmail] = useState('');
  
  
    // Use the useContext hook to get access to the user context
    const [, addUser] = useContext(UserContext); //users,
  
    // Handle form submission and update user context
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const recp = { name, age, address, num_of_family_members, nationality, identification_numbers }
      addUser(recp);
  
      // Clear input fields
      setName('');
      setAge('');
      setEmail('');
      setAddress('');
      setFamilyNum('');
      setID('');
      setNation('');
  
      // Redirect to the /details page
      navigate('/Userdetails');
    };
  
  
    return (
      <div>
        <h2>Let us remember you/Enter your details:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>
            Number of Family members:
            <input type="text" value={num_of_family_members} onChange={(e) => setFamilyNum(e.target.value)} />
          </label>
          <label>
            Nationality:
            <input type="text" value={nationality} onChange={(e) => setNation(e.target.value)} />
          </label>
          <label>
            identification_numbers:
            <input type="text" value={identification_numbers} onChange={(e) => setID(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };