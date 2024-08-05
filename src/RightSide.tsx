import React from 'react';
import './styles.css';

const RightSide: React.FC = () =>{
    return (
        
        <div className='Right-Side'>
            <h2 className='login'>Login</h2>
            <form>
            <input className='email' type='email' placeholder='Enter Your Email'  /> 
            <input className='password' type='password' placeholder='Enter Your Password' />
            <p className='forgot-password'><a>Forgot Password</a></p>
            <button className='login-button' type='submit'>Login</button>
            <div className='alternative-login'>
            <p>or</p>
            <button className='google-login'>Login with Google</button>
            <button className='facebook-login'>Login with Facebook</button>
            </div>
            <div className='create-account'>Create New Account ? <a href='#'>SignUp</a></div>
            </form>
            
        </div>
        


    );
};

export default RightSide;