// import logo from './logo.svg';
// import './App.css';

import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserProvider } from './mainpagefunctions/userContext';
import { UserDetails } from './mainpagefunctions/userDetails';
import { UserDetailsDisplay } from './mainpagefunctions/userDetailsDisplay';

// Define the main app component
const App = () => {

  return (
    <UserProvider>
      <Router>
        <div>
          <h1>Welcome to VR1Family!!</h1>
          <p>We are here to help</p>
          <nav>
            <ul>
              <li>
                <Link to="/AidRecipients">Get help</Link>
              </li>
              <li>
                <Link to="/AidDonors">Offer help</Link>
              </li>
              <li>
                <Link to="/AidItems">Check our Aid Items</Link> ////register;then, category and kit////
              </li>
              <li>
                <Link to="/RequisitionRecip">People-in-need: Make a request</Link>
              </li>
              <li>
                <Link to="/RequisitionDonor">Donor: Make a request</Link>
              </li>
              <li>
                <Link to="/details">details</Link>
              </li>
            </ul>
          </nav>
          
          <UserProvider value={UserProvider.users}>
            <Routes>
                <Route path="/AidRecipients" element={<UserDetails />} />
                <Route path="/AidDonors" element={<UserDetails />} />
                <Route path="/AidItems" element={<UserDetails />} />
                <Route path="/RequisitionRecip" element={<UserDetails />} />
                <Route path="/RequisitionDonor" element={<UserDetails />} />
                <Route path="/details" element={<UserDetailsDisplay />} />

            </Routes>
          </UserProvider>
        </div>
      </Router>
    </UserProvider>
  );
};


export default App;


