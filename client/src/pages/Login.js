import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
function Login() {

    const [userdetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const handlechange = (data) => {
        setuserDetails({ ...userdetails, ...data })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(userdetails);
        //    const res=await axios.post('/api/users/login',userdetails)
        axios.post('/api/users/login', userdetails).then((res) => {
            if (res.data.msg == "Login success") {

                localStorage.setItem('user', JSON.stringify(res.data));
                window.open("/home")
            }
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='login-main'>
            {/* <h1>Now, setup your account 🔐</h1> */}
            <div className="login-container">
                <p>Log In</p>
                <form className='login-form' action="">
                    <div className="login-field">
                        <label htmlFor="" className="login-label">Email</label>
                        <input className='login-input' type="email" onChange={(e) => handlechange({ email: e.target.value })} />
                    </div>
                    <div className="login-field">
                        <label htmlFor="" className="login-label">Password</label>
                        <input className='login-input' type="password" onChange={(e) => handlechange({ password: e.target.value })} />
                    </div>
                    <button className="login-btn" onClick={handleLogin}>Log in</button>

                    <div className="login-linkTo">
                        <a href="/signup">Create account</a>
                        <a href="">Forgot password?</a>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login