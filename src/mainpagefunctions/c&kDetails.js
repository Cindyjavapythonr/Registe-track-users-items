import React, { useState, useEffect } from 'react';


export const AidCategory = () => {
    //get items data based on category 
    return "AC"
};


export const AidKit = () => {
    
    //according to category, take some items in a same category and form them in a single kit

};


export const AidCKDetail = () => {
    
    const[quantity, setQuantity] = useState('');
    const[kit, setKit] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!kit || !quantity) {
          alert("All fields must be filled")
          return
        }
    };
  
    // useEffect(() =>
    // {
    //     fetch("http://localhost:5000/????")
    //     .then(res => res.json())
    //     .then((result) => {
    //         setKit(result);
    //     }
    // )
    // }, [])

    return(
        <div>
            <h3>The available Aid Kits</h3>
            <p>Please consider carefully how many items you need</p>
            <form style={{ margin: '20px', justifyContent: 'center'}} onSubmit={handleSubmit}>
                {/* <div>
                    <label style={{ fontSize: '18px' }}>
                    Item name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div> */}
                <div>
                    <label style = {{ fontSize: '18px'}}>
                        Avalible Aid Kit:
                        <select value={kit} onChange={(e) => setKit(e.target.value)}>
                        <option value="">Select the Aid Kit</option>
                        <option value="food">Personal Hygiene, Dry Food and Hot Food Items</option>
                        <option value="clothing">Footwear, Warm Clothing and Casual Clothing</option>
                        <option value="bedding">Warm Clothing, Bedding</option>
                        <option value="electrical&furniture">Electrical Supplies, Furniture Supplies </option>
                        </select>
                    </label>
                </div>
                <div>
                    <label style = {{ fontSize: '18px' }}>
                    Quantity:
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
        // if the kits' quantity is approved from backend 
        // print ""
    )


};