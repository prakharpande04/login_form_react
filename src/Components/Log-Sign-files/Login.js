import React,{useState} from "react";
import './Login.css';

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import passwd_icon from "../Assets/password.png"

const Login = () => {
    const [action,setAction] = useState("Login");

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>

                <div className="underline">

                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Username" />
                </div>
                {action === "Sign Up"?<div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email ID"/>
                    </div>:<></>}
                <div className="input">
                    <img src={passwd_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            
            {action === "Login"?<div className="forgot-passwd">
                    Lost Password? <span>Click here!</span>
                </div>:<></>}

            <div className="submit-container">
                <div className={
                    action === "Login"?"submit gray":"submit"
                } onClick={() => {
                    setAction("Sign Up") 
                }}>Sign Up</div>

                <div className={
                    action === "Sign Up"?"submit gray":"submit"
                } onClick={() => {
                    setAction("Login") 
                }}>Login</div>
            </div>
        </div>
    );
};

export default Login;