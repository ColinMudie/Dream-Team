import React, { useRef, useState, useContext } from "react";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import LogInContext from "../../utils/LogInContext";
import {Grid, Container, Typography} from '@material-ui/core';
import "./Login.css"
// import TextField from '@material-ui/core/TextField';

function Login(props) {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
    // When the signup button is clicked, we validate the email and password are not blank
    const handleSubmit = event => {
        event.preventDefault();
        console.log(emailRef.current.value.trim());
        console.log(passwordRef.current.value);
        const userData = {
            email: emailRef.current.value.trim(),
            password: passwordRef.current.value.trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        //login user
        API.loginUser({
            email: userData.email, 
            password: userData.password
        })
        //if error display here
        .catch(err => console.log(err))
        // if the login info is correct set the state to logged in and redirect to synth page
        .then((res) => {console.log(res);
            if (res){
                setIsLoggedIn(true);
            }
        })
            formRef.current.reset()
    }
    if (isLoggedIn) {
        return <Redirect to="/synth"/>
    }
    return (
       
           <Container>
            <Grid item xs={12} direction="row" justify="center" alignItems="center">
                <Typography variant="h4">
                    <h2 className="titletext">Login</h2>
                </Typography>    
                    <form ref={formRef} className="signup">
                        <div className="form-group">
                        
                            <label className="textcolorwhite"  htmlFor="exampleInputEmail1"> Email address </label>
                            <input ref={emailRef} type="email" className="form-control" id="email-input" placeholder="Email" />
                            
                        </div>
                        <div className="form-group">
                            <label className="textcolorwhite" htmlFor="exampleInputPassword1"> Password </label>
                            <input ref={passwordRef} type="password" className="form-control" id="password-input" placeholder="Password" />
                        </div>
                        <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                            
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-default">Login</button>
                        <br />
                    <p className="textcolorwhite">Or Sign Up in <a className="linktext" href="/signup">here</a></p>
                </form>
            </Grid>
            </Container>
           
        
    )
}

export default Login;

