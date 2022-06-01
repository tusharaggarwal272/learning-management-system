import React, { useState } from 'react'
import './SignUp.css'
import Login from './Login.js'
import Validation from '../Validation'
import axios from 'axios';
import { Button } from '@mui/material'
import { Box } from '@mui/system';

function SignUp() {

  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    number: "",
    password: ""
  })

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.number]: event.target.value,
      [event.target.password]: event.target.value,
    })
  }

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    number: '',
    password: ''
  });

  const handleSignUp = (event) => {
    // prevents refresh on clicking signup
    event.preventDefault();
    // setErrors(Validation(info));
    // if (errors.password == '' && errors.name == '' && errors.number == '' && errors.email == '') {
    //   console.log("in axios making request")
    axios.post('/api/users/register', info).then((res) => {
      console.log(res);
      // window.open('/login')
    }).catch((err) => {
      console.log(err);
    })
    // }

  }
  return (
    <div className='signUp-main'>
      <h1>Now, setup your account 🔐</h1>
      <div className="signUp-container">
        <form className='signUp-form' action="">

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Your Name</label>
            <input
              type="text"
              name='fullname'
              value={info.fullname}
              className="signUp-input"
              onChange={handleChange} />
            {errors.fullname && <p className='signUp-error'>{errors.fullname}</p>}
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Email</label>
            <Box sx={{display:'flex',flexDirection:'row',width:'100%'}}>
              <input
                type="email"
                name='email'
                value={info.email}
                className="signUp-input"
                onChange={handleChange} />
              {/* <Button>Get OTP</Button> */}
            </Box>

            {errors.email && <p className='signUp-error'>{errors.email}</p>}
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Mobile number</label>
            {/* <div className="signUp-mob">
              <p>+91</p>
            </div> */}
            <Box sx={{display:'flex',flexDirection:'row',width:'100%'}}>
            <input
              type="tel"
              name='number'
              value={info.number}
              className="signUp-input"
              onChange={handleChange} />
            {/* <Button>Get OTP</Button> */}
            </Box>
            {errors.number && <p className='signUp-error'>{errors.number}</p>}
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Password</label>
            <input
              type="password"
              name='password'
              value={info.password}
              className="signUp-input"
              onChange={handleChange} />
            {errors.password && <p className='signUp-error'>{errors.password}</p>}
          </div>

          <button onClick={handleSignUp} className='signUp-btn'>Create My Account</button>
          <a href="/login">I already have an account, Log In</a>
        </form>
      </div>
    </div>
  )
}
export default SignUp