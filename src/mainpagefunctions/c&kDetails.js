import React, { useState, useEffect } from 'react';


export const AidCategory = () => {
    //get items data based on category 
    return "AC"
};


export const AidKit = () => {
    
    //according to category, take some items in a same category and form them in a single kit

};


export const AidCKDetail = () => {
    const[recipient_name, setName] = useState('');
    const[quantity, setQuantity] = useState('');
    const[kit, setKit] = React.useState([]);
    const[note, setNote] = React.useState([]);
    const[item, setItem] = React.useState([])
    const[allRequests, setAllRequests] = React.useState([])
    

    const request = {recipient_name, quantity, kit, note, item}


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!quantity || !recipient_name || !note) {
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
            setQuantity('');
            setKit('');
            setItem('');
            setNote('');
            window.location.reload(true)
          })
    };
  
    useEffect(() =>
    {
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
                    <label style = {{ fontSize: '18px'}}>
                        Available Aid Kit:
                        <select value={kit} onChange={(e) => setKit(e.target.value)}>
                        <option value="">Select the Aid Kit</option>
                        <option value="food">Personal Hygiene</option>
                        <option value="clothing">Footwear</option>
                        <option value="bedding">Warm Clothing</option>
                        <option value="electrical&furniture">Electrical Supplies</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label style = {{ fontSize: '18px' }}>
                    Item:
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label style = {{ fontSize: '18px' }}>
                    Quantity:
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </label>
                </div>
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