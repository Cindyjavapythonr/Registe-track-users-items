import React, { useState, useEffect } from 'react';

export const AidCKDetail = () => {
    const[recipient_name, setName] = useState('');
    const[kitRequests, setKitRequests] = React.useState([
        {kitName: '', quantity: ''}
    ]);
    const[categoryOfRequests, setCategoryOfRequests] = React.useState(['']);
    const[itemRequests, setItemRequests] = React.useState([
        {itemName: '', quantity: ''}
    ]);
    const[note, setNote] = React.useState([]);
    
    const[kit, setKit] = React.useState([]);

    const[kits, setKits] = React.useState([]);
    const[categories, setCategories] = React.useState([]);
    const[items, setItems] = React.useState([]);

    const[allRequests, setAllRequests] = React.useState([]);
    

    const request = {recipient_name, kits, items, note}

    const handleFormKitChange = (index, event) => {
        let data = [...kitRequests];
        data[index][event.target.name] = event.target.value;
        setKitRequests(data);
    }

    const addKits = () => {
        let newfield = { name: '', age: '' };
    
        setKitRequests([...kitRequests, newfield]);
    }

    const removeKits = (index) => {
        let data = [...kitRequests];
        data.splice(index, 1)
        setKitRequests(data)
    }

    const handleFormCategoryChange = (index, event) => {
        let requestedCategory = event.target.value;
        setCategoryOfRequests(requestedCategory);
        // let updatedItems = getUpdatedItems(requestedCategory);
        // setItems(updatedItems);
        let data = [...itemRequests];
        //let requestedCategory = [...categoryOfRequests]
        data[index][event.target.name] = event.target.value;
        requestedCategory[index][event.target.name] = event.target.value;
        setItemRequests(data);
        setCategoryOfRequests(requestedCategory);
    }

    

    const handleFormItemChange = (index, event) => {
        let data = [...itemRequests];
        data[index][event.target.name] = event.target.value;
        setItemRequests(data);
    }

    const addItems = () => {
        let newfield = { name: '', age: '' };
    
        setKitRequests([...kitRequests, newfield]);
    }

    const removeItems = (index) => {
        let data = [...kitRequests];
        data.splice(index, 1)
        setKitRequests(data)
    }

    // Submit a new request with the recipient name, list of kits/items and a note
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipient_name || (!kitRequests || !itemRequests)) {
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
            setKitRequests('');
            setCategoryOfRequests('');
            setItemRequests('');
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

    // Fetch all corresponding aid items when categories value changes
    useEffect(() =>{
        
        // .then((result) => {
        //     setItems(result);
        // }
    }
    , [categories])

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
                    <label style = {{ fontSize: '18px' }}>
                    Aid Kits:
                    {kitRequests.map((input, index) => (
                        <div key ={index}>
                            <select 
                            value={input.kitName}
                            placeholder='Kit'
                            onChange={event => handleFormKitChange(index, event)}>
                                <option>Available aid kits</option>
                                {kits.map((kit) => (
                                    <option>{kit.name}</option>
                                ))}
                            </select>

                            <input 
                            name='quantity'
                            placeholder='Quantity'
                            value ={input.quantity}
                            onChange={event => handleFormKitChange(index, event)}
                            />
                            <button onClick={() => removeKits(index)}>Remove</button>
                        </div>
                    ))}
                    </label>
                </div>
                <button onClick={addKits}>Add More Kits</button>
                <div>
                    {itemRequests.map((input, index) => (
                        <div key ={index}>
                            <select 
                            value={categoryOfRequests.categoryName}
                            placeholder='Category'
                            onChange={event => handleFormCategoryChange(index, event)}>
                                <option>Aid Category</option>
                                {categories.map((kit) => (
                                    <option>{categories.name}</option>
                                ))}
                            </select>
                            <select
                            >

                            </select>
                            <input 
                            name='quantity'
                            placeholder='Quantity'
                            value ={input.quantity}
                            onChange={event => handleFormItemChange(index, event)}
                            />
                            <button onClick={() => removeKits(index)}>Remove</button>
                        </div>
                    ))}
                </div>
                <button onClick={addKits}>Add More Items</button>
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