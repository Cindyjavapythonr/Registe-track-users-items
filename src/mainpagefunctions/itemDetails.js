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

    const[categories, setCategories] = React.useState([]);
    const[kits, setKits] = React.useState([]);
    const[items, setItems] = React.useState([]);
    const[size, setSize] = React.useState([]);
    const[kit, setKit] = React.useState([]);
  
    // const categories = [
    //   { name:"DryFoodItems", inventory:'low'},
    //   { name:"HotFoodItems", inventory:'low'},
    //   { name:"PersonalHygiene", inventory:'low'},
    //   { name:"Footwear", inventory:'low'},
    //   { name:"Warmlothing", inventory:'low'},
    //   { name:"CasualClothing", inventory:'low'}
    // ]

    // Handle form submission and update user context
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !brand || !quantity || !expiry_date || !ingredients || !allergens) {
        alert("All fields must be filled")
        return
      }
      const aidItems = { name, category, quantity, expiry_date, ingredients, allergens, brand, size, kit}
      console.log(aidItems)
      
      fetch(
        "http://localhost:5000/items/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(aidItems)
        }
      ).then(() => {
        alert(`${aidItems.name} has been successfully added`)
        setName('');
        setCat('');
        setBrand('');
        setQuantity('');
        setEdate('');
        setIngr('');
        setAllerg('');
        setSize('')
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
      fetch("http://localhost:5000/categories/category")
      .then(res => res.json())
      .then((result) => {
        setCategories(result);
      }
    )
      fetch("http://localhost:5000/categories/kit")
      .then(res => res.json())
      .then((result) => {
        setKits(result);
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
                  {categories.map((currCategory) => (
                    <option>{currCategory.name}</option>
                  ))}
                </select>
            </label>
          </div>
          <div>
            <label style = {{ fontSize: '18px'}}>
                Aid Kit:
                <select value={kit} onChange={(e) => setKit(e.target.value)}>
                  <option>Select kit</option>
                  {kits.map((currKit) => (
                    <option>{currKit.name}</option>
                  ))}
                </select>
            </label>
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
              Expiry Date:
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
          <div>
            <label style = {{ fontSize: '18px' }}>
              Size:
              <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
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
                          <p style={{fontSize: '18px'}}>Expiry Date: {item.expiry_date}</p>
                          <p style={{fontSize: '18px'}}>Ingredients: {item.ingredients}</p>
                          <p style={{fontSize: '18px'}}>Allergens: {item.allergens}</p>
                          <p style={{fontSize: '18px'}}>Size: {item.size}</p>
                          <p style={{fontSize: '18px'}}>Kit: {item.kit}</p>
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