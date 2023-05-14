import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Container, Paper } from '@material-ui/core';
import { useEffect } from 'react';


export const DonorDetails = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email_address, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [nationality, setNation] = useState('');  //for his family members
    const [identification_numbers, setID] = useState('');
    const [expiry_date, setEdate] = useState('');

    //Advanced info of donor org
    const [org, setOrg] = useState('');
    const [addHeadq, setHead] = useState('');
    const [principal, setPrincipal] = useState('');
    const [pPhone, setPphone] = useState('');
    const [abn, setAbn] = useState('');
    
    const[persons, setPersons] = React.useState([])
  
    // Handle form submission and update user context
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !age || !address || !email_address || !phone_number || !nationality || !identification_numbers) {
        alert("Individual fields must be filled")
        return
      }
      const donor = { name, age, address, phone_number, nationality, identification_numbers, email_address }
      
      fetch(
        "http://localhost:5000/donors/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(donor)
        }
      ).then(() => {
        alert(`${donor.name} has been successfully added`)
        // Clear input fields
        setName('');
        setAge('');
        setAddress('');
        setEmail('');
        setPhone('');
        setID('');
        setNation('');
        window.location.reload(true)
      })
    };
  
    useEffect(() =>
    {
      fetch("http://localhost:5000/donors")
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
              Address:
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
            Email:
            <input type="email" value={email_address} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
            Contact number:
            <input type="number" value={phone_number} onChange={(e) => setPhone(e.target.value)} />
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
              Identification numbers:
              <input type="text" value={identification_numbers} onChange={(e) => setID(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Expiry date:
              <input type="text" value={expiry_date} onChange={(e) => setEdate(e.target.value)} />
            </label>
          </div>

          <p>If you are from a organization, please fill the below fields</p>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Name of the organization:
              <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              The Australian Business Number of the organization:
              <input type="number" value={abn} onChange={(e) => setAbn(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Address of the headquarters:
              <input type="text" value={addHeadq} onChange={(e) => setHead(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Name of the principal contact person:
              <input type="text" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Contact number of the principal contact person:
              <input type="number" value={pPhone} onChange={(e) => setPphone(e.target.value)} />
            </label>
          </div>
          
          <button type="submit">Save</button>
        </form>
        <div>
          <hr/>
          <h3>All Donor Details:</h3>
          {persons.length > 0 ? (
              <ul>
                  {persons.map((person, index) => (
                      <div key={index}>
                          <p style={{fontSize: '18px'}}>Name: {person.name}</p>
                          <p style={{fontSize: '18px'}}>Age: {person.phone}</p>
                          <p style={{fontSize: '18px'}}>Email address: {person.email_address}</p>
                          <p style={{fontSize: '18px'}}>Address: {person.address}</p>
                          <hr />
                      </div>
                  ))}
              </ul>
          ) : (
              <p>No donor informations found</p>
          )}
        </div>
      </div>
    );
  };