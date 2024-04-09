import React, { useState } from 'react';

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  //show form!  default false
  const [show, setShow] = useState(false);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    //live email validation. looking for the @
    if (!event.target.value.includes('@')) {
      setErrorMsg('Email is invalid');
      return;
    }
  };

  const clearForm = () => { 
    setFirstName(''); 
    setLastName(''); 
    setEmail(''); 
    setErrorMsg('');
  }

  const submitForm = (event) => {
    event.preventDefault(); // Prevent form submission if fields are invalid!!
    //the basic validation - no nulls
    if (!firstName || !lastName || !email){
      setErrorMsg('All fields required!');
      return;
    }
    //testing for only letters
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      setErrorMsg('Please use only letters in name.');
      return;
    }
    //added email validation here to prevent submission!!
    if (!email.includes('@')) {
      setErrorMsg('Email is invalid');
      return;
    }
    // log input data to console after submission***testing
    console.log('Form submitted:', { firstName, lastName, email });
    // clears form and unmounts it.
    clearForm();
    setShow(false);
  }


  return (
    <div className="Container">
    {/* // Show form button. doesnt show on default. this renders it  */}
    {!show ? (
      <button onClick={() => setShow(true)} className="button">
          Show Form
      </button>
      ) : (
      <form>
        <label className="form-label">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)} 
        />

        <label className="form-label">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)} 
        />

        <label className="form-label">Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <p className="error-message">{errorMsg}</p>

        <button onClick={clearForm} className="button">Clear</button>
        <button onClick={submitForm} className="button">Submit</button>

      </form>
    )}
  </div>
)};

export default SignUpForm;

