import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

// Define a component to capture user details
export const ItemDetails = () => {
    const [name, setName] = useState('');
    const [category, setCat] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry_date, setEdate] = useState('');
    const [ingredients, setIngr] = useState('');
    const [allergens, setAllerg] = useState('');

    const[items, setItems] = React.useState([]);
  
    // Handle form submission and update user context
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !category || !brand || !quantity || !expiry_date || !ingredients || !allergens) {
        alert("All fields must be filled")
        return
      }
      const aidItems = { name, category, quantity, expiry_date, ingredients, allergens }
      
      fetch(
        "http://127.0.0.1:5000/recipients/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(aidItems)
        }
      ).then(() => {
        alert(`$ aidItems.name} has been successfully added`)
        // Clear input fields
        setName('');
        setCat('');
        setBrand('');
        setQuantity('');
        setEdate('');
        setIngr('');
        setAllerg('');
        window.location.reload(true)
      })
    };
  
    useEffect(() =>
    {
      fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then((result) => {
        setItems(result);
      }
    )
    }, [])

    return ( 
      <div>
        <h3>Enter Aid Item details:</h3>
        <form style={{ margin: '20px', justifyContent: 'center'}} onSubmit={handleSubmit}>
          <div>
            <label style={{ fontSize: '18px' }}>
              Item name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px'}}>
                Category:
                <select value={category} onChange={(e) => setCat(e.target.value)}>
                <option value="">Select the Aid Category</option>
                <option value="DryFoodItems">Dry Food Items</option>
                <option value="HotFoodItems">Hot Food Items</option>
                <option value="PersonalHygiene">Personal Hygiene</option>
                <option value="Footwear">Footwear</option>
                <option value="Warmlothing">Warm Clothing</option>
                <option value="CasualClothing">Casual Clothing</option>
                <option value="FurnitureSupplies">Furniture Supplies</option>
                <option value="ElectricalSupplies">Electrical Supplies</option>
                <option value="Bedding">Bedding</option>
                </select>
            </label>
            {/* <p>Selected category: {category}</p> */}
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Quantity:
              <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </label>
          </div>
          <div>
            <label style={{ fontSize: '18px' }}>
              Brand:
              <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Expiry_date:
              <input type="text" value={expiry_date} onChange={(e) => setEdate(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Ingredients:
              <input type="text" value={ingredients} onChange={(e) => setIngr(e.target.value)} />
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px' }}>
              Allergens:
              <input type="text" value={allergens} onChange={(e) => setAllerg(e.target.value)} />
            </label>
          </div>
          <button type="submit">Save</button>
        </form>
        <div>
          <hr/>
          <h3>All Aid Item Details:</h3>
          {items.length > 0 ? (
              <ul>
                  {items.map((item, index) => (
                      <div key={index}>
                          <p style={{fontSize: '18px'}}>Item name: {item.name}</p>
                          <p style={{fontSize: '18px'}}>Brand: {item.brand}</p>
                          <p style={{fontSize: '18px'}}>Category: {item.category}</p>
                          <p style={{fontSize: '18px'}}>Quantity: {item.quantity}</p>
                          <p style={{fontSize: '18px'}}>Expiry_date: {item.expiry_date}</p>
                          <p style={{fontSize: '18px'}}>Ingredients: {item.ingredients}</p>
                          <p style={{fontSize: '18px'}}>Allergens: {item.allergens}</p>
                          <hr />
                      </div>
                  ))}
              </ul>
          ) : (
              <p>No item informations found</p>
          )}
        </div>
      </div>
    );
  };