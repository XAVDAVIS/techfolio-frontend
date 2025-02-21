import React, { useState } from "react";

function Registration (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Registration</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              id="name" 
              placeholder="full Name" />
            <label htmlFor="email">email</label>

            <input 
            value={email} 
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com" 
              id="email"
              name="email" />
            <label htmlFor="password">password</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" />
            <button type="submit">Log In</button>
        </form>
        <button 
          className="link-btn" 
          onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    );
}

export default Registration;