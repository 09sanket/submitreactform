import React, { useState } from "react";

const RegistrationForm = ({ onSubmit }) => {
    const mainStyle={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'centre',
        flexDirection:'colum',
    };

    
  const labelStyles = {
    display: 'block',
    // marginBottom: '8px',
  };
    const formStyles ={
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
   
    };
    const inputStyle ={
        width: '80%',
        border: '2px solid red',
        borderRadius: '8px',
    };
    const SubmitStyle ={
        margin: '5px',
        backgroundColor: 'lightgreen',
        width: '40%',
        border: '2px solid red',
        borderRadius: '8px',
        fontWeight: 'bolder',
    }
    
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({
          ...userDetails,
          [name]: value,
        });
      };
    
      const handleSubmit = () => {
        // Call the onSubmit prop and pass the user details
        onSubmit(userDetails);
      };
    
      return (
        <>
          <div style={mainStyle}>
            <div style={formStyles}>
              <label style={labelStyles}>Name</label>
              <input
                style={inputStyle}
                type="text"
                name="name"
                placeholder="Enter Name"
                value={userDetails.name}
                onChange={handleInputChange}
              />
    
              <label style={labelStyles}>Email</label>
              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Enter Email"
                value={userDetails.email}
                onChange={handleInputChange}
              />
    
              <label style={labelStyles}>Password</label>
              <input
                style={inputStyle}
                type="password"
                name="password"
                placeholder="Enter Password"
                value={userDetails.password}
                onChange={handleInputChange}
              />
    
              <button style={SubmitStyle} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </>
      );
    };
    
    export default RegistrationForm;