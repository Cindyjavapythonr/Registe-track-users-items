import React, { useState } from 'react';
import { useEffect } from 'react';
// uc8: Display Donor details
export const ReceiveDDetails = () => {
    const [donorName, setDonorName] = useState(['']);
    const [category, setCategory] = useState(['']);
    const [itemName, setItemName] = useState(['']);
    
    const [donors, setDonors] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [items, setItems] = React.useState([]);

    const [receives, setReceives] = React.useState([]);
    
    const handleCategory = (e) => {
        setCategory(e.target.value)
        setItems(items.filter(item => item.category === e.target.value))
    }

    // Handle kit form submission and update user context
    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (!donorName || !itemName) {
            alert("All fields must be filled")
            return
        }
        const donation = {donorName, itemName}
        console.log(donation)
        
        fetch(
            "http://localhost:5000/receives/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(donation)
            }
        ).then(() => {
            alert(`${donation.donorName} has been successfully added`)
            setDonorName('');
            setItemName('');
            window.location.reload(true)
        })
        };
    
    useEffect(() =>
    {
        fetch("http://localhost:5000/donors")
        .then(res => res.json())
        .then((result) => {
        setDonors(result);
        }
    )
        fetch("http://localhost:5000/categories/category")
        .then(res => res.json())
        .then((result) => {
        setCategories(result);
        }
    )
        fetch("http://localhost:5000/receives")
        .then(res => res.json())
        .then((result) => {
        setReceives(result);
        }
    )
        fetch("http://localhost:5000/items")
        .then(res => res.json())
        .then((result) => {
        setItems(result);
        }
    )
    }, [])

    return ( 
        <div>
        <h3>What would you like to donate:</h3>
        <form style={{ margin: '20px', justifyContent: 'center'}} onSubmit={handleDonationSubmit}>
            <div>
                <label style={{ fontSize: '18px' }}>
                    Donor Name:
                    <select 
                    value={donorName}
                    placeholder='Donor'
                    onChange={(e) => setDonorName(e.target.value)}>
                        <option>Choose a Donor</option>
                        {donors.map((donor) => (
                            <option>{donor.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label style={{ fontSize: '18px' }}>
                    Category Name:
                    <select 
                        value={category}
                        placeholder='Category'
                        onChange={e => handleCategory(e)}>
                            <option>Choose a Category</option>
                            {categories.map((currCategory) => (
                                <option>{currCategory.name}</option>
                            ))}
                    </select>
                </label>
            </div>
            <div>
                <label style={{ fontSize: '18px' }}>
                    Item Name:
                    <select 
                        value={itemName}
                        placeholder='Item'
                        onChange={(e) => setItemName(e.target.value)}>
                            <option>Choose an Item</option>
                            {items.map((item) => (
                                <option>{item.name}</option>
                            ))}
                    </select>
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
        <div>
            <hr/>
            <h3>All Donations from Donors:</h3>
            {receives.length > 0 ? (
                <ul>
                    {receives.map((item, index) => (
                        <div key={index}>
                            <p style={{fontSize: '18px'}}>Donor: {item.donor_name}</p>
                            <p style={{fontSize: '18px'}}>Donation: {item.item}</p>
                            <hr />
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No donations found</p>
            )}
            
        </div>
        </div>
    );
    };