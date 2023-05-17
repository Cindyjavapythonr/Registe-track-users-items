import React, { useState, useEffect } from 'react';

export const AidCKDetail = () => {
    const[recipient_name, setName] = useState('');
    const[kit, setKit] = useState(['']);
    const[item, setItem] = useState(['']);
    const[quantity, setQuantity] = useState(['']);
    const[note, setNote] = useState(['']);
    
    const[aidType, setAidType] = useState('kit');
    const [category, setCategory] = useState(['']);

    const[kits, setKits] = React.useState([]);
    const[categories, setCategories] = React.useState([]);
    const[items, setItems] = React.useState([]);
    const[selectedKit, setSelectedKit] = React.useState([]);

    const[allRequests, setAllRequests] = React.useState([]);
    
    const request = {recipient_name, kit, item, quantity, note}

    const handleCategory = (e) => {
        setCategory(e.target.value)
        setItems(items.filter(item => item.category === e.target.value))
    }

    const handleKit = (e) => {
        setKit(e.target.value)
        setSelectedKit(kits.filter(kit => kit.name === e.target.value))
    }

    const handleKitButton = () => {
        setAidType('kit');
        setQuantity(['']);
    }

    const handleItemButton = () => {
        setAidType('item');
        setQuantity(['']);
    }

    // Submit a new request with the recipient name, list of kits/items and a note
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipient_name 
            // || (!kit && !item) || !quantity
             ) {
          alert("All fields must be filled")
          return
        }
        fetch(
            "http://localhost:5000/requests/", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(request)
            }
          ).then(() => {
            alert(`Request has been successfully added`)
            setName('');
            setKit('');
            setItem('');   
            setQuantity('');
            setNote('');
            window.location.reload(true)
          })
    };
  
    useEffect(() =>
    {
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then((result) => {
          setCategories(result);
        }
      )
      fetch("http://localhost:5000/kits")
      .then(res => res.json())
      .then((result) => {
        setKits(result);
      }
    )
        fetch("http://localhost:5000/requests")
        .then(res => res.json())
        .then((result) => {
          setAllRequests(result);
        }
    )
    }, [])

    return(
        <div>
            <h3>The available Aid Kits</h3>
            <p>Please consider carefully how many items you need</p>
            <form style={{ margin: '20px', justifyContent: 'center'}} onSubmit={handleSubmit}>
                <div>
                    <label style = {{ fontSize: '18px' }}>
                    Recipient Name:
                    <input type="text" value={recipient_name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label style = {{ fontSize: '18px' }}> What would you like to request:</label>
                    <button onClick={() => handleKitButton()}> Aid Kit</button>
                    <button onClick={() => handleItemButton()}> Aid Item</button>
                </div>
                {aidType === 'kit' ? (
                    <div>
                    <div>
                        <label style = {{ fontSize: '18px' }}>
                        Aid Kits:
                            <select 
                            value={kit}
                            placeholder='Kit'
                            onChange={(e) => handleKit(e)}>
                                <option>Available aid kits</option>
                                {kits.map((kit) => (
                                    <option>{kit.name}</option>
                                ))}
                            </select>
                            <input 
                            type='number'
                            name='quantity'
                            placeholder='Quantity'
                            value ={quantity}
                            onChange={event => setQuantity(event.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        {/* <p style={{fontSize: '18px'}}>Kit Name: {item.name}</p>
                        <p style={{fontSize: '18px'}}>Item Name: {item.items[index].itemName}</p>
                        <p style={{fontSize: '18px'}}>Item Amount: {item.items[index].amount}</p> */}
                    </div>
                    </div>
                ) : (
                    <div>
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
                                value={item}
                                placeholder='Item'
                                onChange={(e) => setItem(e.target.value)}>
                                    <option>Choose an Item</option>
                                    {items.map((item) => (
                                        <option>{item.name}</option>
                                    ))}
                            </select>
                            <input 
                            type='number'
                            name='quantity'
                            placeholder='Quantity'
                            value ={quantity}
                            onChange={event => setQuantity(event.target.value)}
                            />
                        </label>
                    </div>
                    </div>
                )
                }
                <div>
                    <label style = {{ fontSize: '18px' }}>
                    Note:
                    <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Save</button>
            </form>
            <div>
                <hr/>
                <h3>All Requests Details:</h3>
                {allRequests.length > 0 ? (
                    <ul>
                        {allRequests.map((allRequest, index) => (
                            <div key={index}>
                                <p style={{fontSize: '18px'}}>Id: {allRequest.id}</p>
                                <p style={{fontSize: '18px'}}>Recipient Name: {allRequest.recipient_name}</p>
                                <p style={{fontSize: '18px'}}>Kit: {allRequest.kit}</p>
                                <p style={{fontSize: '18px'}}>Item: {allRequest.item}</p>
                                <p style={{fontSize: '18px'}}>Quantity: {allRequest.quantity}</p>
                                <p style={{fontSize: '18px'}}>Note: {allRequest.note}</p>
                                <hr />
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>No user information found</p>
                )}
                </div>
        </div>
    )


};