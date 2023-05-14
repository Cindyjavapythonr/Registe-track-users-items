import React, { useContext } from 'react';
import { DonorDetails } from './donorDetails';
// import from donoruser
// uc8: Display Donor details
export const ReceiveDDetails = () => {

    return (
        <p>read data from BE and return with corresponding items Or<br/>  store donor data and items data in a dictionary in frontend <br/> and print these data here</p>
        
    );
    // const [donor] = useContext(UserContext);
  
    // return (
    //   <div>
    //       <h2>All User Details:</h2>
    //       {users.length > 0 ? (
    //           <ul>
    //               {users.map((user, index) => (
    //                   <div key={index}>
    //                       <p>Name: {user.name}</p>
    //                       <p>Email: {user.email}</p>
    //                       <p>Phone: {user.phone}</p>
    //                       <hr />
    //                   </div>
    //               ))}
    //           </ul>
    //       ) : (
    //           <p>No user informations found</p>
    //       )}
    //   </div>
    // );
};