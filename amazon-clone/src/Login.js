import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';
import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
    
    const login =(e) =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) =>{
                // login here.. redirect to home page
                history.push('/');
            })
        .catch((error) => alert(error.message))
    };

    const register =(e) =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // create a user and login
            history.push('/');
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            {/* <h1> Login</h1> */}
            <Link to='/'>
                <img 
                    className='login__img'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_umixnVplgh8Ivltsk9SG7v3fYbtl7QHH1w&usqp=CAU'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='email' 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                        />
                    <button type='submit' onClick={login} className='login__signInButton'>Sign- In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of 
                    Use and Privacy Notice.
                </p>
                <button onClick={register} className='login_signUpButton'>Create your Amazon Account</button>
                
            </div>
            
        </div>
    )
}

export default Login
