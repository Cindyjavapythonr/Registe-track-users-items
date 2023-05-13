import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Container, Paper } from '@material-ui/core';
import { useEffect } from 'react';

// Define a component to capture user details
export const UserDetails = () => {
    const paperStyle = {padding : '20px 20px 20px 40px', width : 400, margin: "30px auto" }
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [num_of_family_members, setFamilyNum] = useState('');
    const [nationality, setNation] = useState('');  //for his family members
    const [identification_numbers, setID] = useState('');
    const [expiry_date, setEdate] = useState('');
    const [partner, setPar] = useState('');  //for his family members
    const [agePartner, setAgepartner] = useState('');
    const [name_kids, setKidsName] = useState('');
    const [age_kids, setKidsAge] = useState('');

    const[persons, setPersons] = React.useState([])
  
    // Handle form submission and update user context
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !age || !address || !num_of_family_members || !nationality || !identification_numbers) {
        alert("All fields must be filled")
        return
      }
      const recp = { name, age, address, num_of_family_members, nationality, identification_numbers }
      
      fetch(
        "http://127.0.0.1:5000/recipients/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(recp)
        }
      ).then(() => {
        alert(`${recp.name} has been successfully added`)
        // Clear input fields
        setName('');
        setAge('');
        setAddress('');
        setFamilyNum('');
        setID('');
        setNation('');
        window.location.reload(true)
      })
    };
  
    useEffect(() =>
    {
      fetch("http://localhost:5000/recipients")
      .then(res => res.json())
      .then((result) => {
        setPersons(result);
      }
    )
    }, [])

    return (
      <div>
        <h3>Enter your details:</h3>
        <form style={{ margin: '20px', justifyContent: 'center'}} onSubmit={handleSubmit}>
          <div>
            <label style={{ fontSize: '18px' }}>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Age:
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Previous Address:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Number of Family members:
              <input type="text" value={num_of_family_members} onChange={(e) => setFamilyNum(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Nationality:
              <input type="text" value={nationality} onChange={(e) => setNation(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Identificaton numbers:
              <input type="text" value={identification_numbers} onChange={(e) => setID(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Expiry date:
              <input type="text" value={expiry_date} onChange={(e) => setEdate(e.target.value)} />
            </label>
          </div>

          <p>If you have additional information want to tell us, <br/ >please fill the below fields</p>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Name of common law partner:
              <input type="text" value={partner} onChange={(e) => setPar(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Age of common law partner:
              <input type="text" value={agePartner} onChange={(e) => setAgepartner(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Name of kids:
              <input type="text" value={name_kids} onChange={(e) => setKidsName(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Age of kids:
              <input type="text" value={age_kids} onChange={(e) => setKidsAge(e.target.value)} />
            </label>
          </div>
          
          <button type="submit">Save</button>
        </form>
        

          

        <div>
          <hr/>
          <h3>All Recipient Details:</h3>
          {persons.length > 0 ? (
              <ul>
                  {persons.map((person, index) => (
                      <div key={index}>
                          <p style={{fontSize: '18px'}}>Name: {person.name}</p>
                          <p style={{fontSize: '18px'}}>Age: {person.age}</p>
                          <p style={{fontSize: '18px'}}>Previous Address: {person.address}</p>
                          <p style={{fontSize: '18px'}}>Family Members: {person.num_of_family_members}</p>
                          <hr />
                      </div>
                  ))}
              </ul>
          ) : (
              <p>No user informations found</p>
          )}
        </div>
      </div>
    );
  };