import React from 'react'
import './Loginform.css'
import { FaUser ,FaLock} from "react-icons/fa";

const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username'  required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="" placeholder='Password'  required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>
            <button type='submit'>Login</button>

            <div className="register-link">
            <p>Don't haven an account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default Loginform;