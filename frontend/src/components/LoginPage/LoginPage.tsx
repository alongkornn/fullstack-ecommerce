import React, { useState } from 'react'
import "./LoginPage.css"
import { assets } from '../../assets/assets'

const LoginPage = ( {setIsLogin} ) => {
    const [currState, setCurrState] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleStateChange = (newState) => {
        setCurrState(newState);
        setEmail("");
        setPassword("");
        setShowPassword(false);
        if (newState === "login") {
            setName("");
        }
    };
    
    return (
        <div className='login-page'>
            <form className='login-page-container'>
                <div className="login-page-title">
                    <h2>{currState === "login" ? "Login" : "Sign Up"}</h2>  
                    <img onClick={() => setIsLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-page-input">
                    {currState === "signup" && (
                        <input 
                            type="text" 
                            placeholder='Enter your name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-input-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder='Enter your password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button 
                            type="button" 
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                    <button type='submit'>{currState === "login" ? "Login" : "Sign Up"}</button>
                    <p>{currState === "login" ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={() => handleStateChange(currState === "login" ? "signup" : "login")}>
                            {currState === "login" ? "Sign Up" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage    