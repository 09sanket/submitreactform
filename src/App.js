import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const appStyles = {
  textAlign: 'center',
  backgroundColor: 'lightcyan',
  fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
};

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleFormSubmit = (userData) => {
    setUserDetails(userData);
    setIsSubmitted(true);
  };

  const handleFormReset = () => {
    setIsSubmitted(false);
    setUserDetails({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={appStyles}>
      <h1>Welcome to My App</h1>
      {!isSubmitted ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <>
          <h2>User Details</h2>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Password: {userDetails.password}</p>
          <button onClick={handleFormReset}>Reset Form</button>
        </>
      )}
    </div>
  );
};

export default App;
