import React, { useRef, useContext } from "react";
import API from "../../utils/API";
import { Redirect, Link } from 'react-router-dom';
import LogInContext from "../../utils/LogInContext";
import { Grid, Container, Typography } from '@material-ui/core';
import "./Signup.css"


function Signup() {
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
        //create user
        API.createUser({
            email: userData.email,
            password: userData.password
        }).catch(err => console.log(err))
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.user));
                console.log(res);
                if (res) {
                    setIsLoggedIn(true);
                }
            })
        formRef.current.reset()
    }
    if (isLoggedIn) {
        return <Redirect to="/synth" />
    }
    return (
        <Grid>
        <Container maxWidth="sm">
            <Grid item xs={12} direction="row" justify="center" alignItems="center">
                <Typography variant="h4">
                    <h2 className="titletext">Sign Up Form</h2>
                </Typography>
                <form ref={formRef} >
                    <div className="form-group">
                        <label className="textcolorwhite" htmlFor="exampleInputEmail1">Email address </label>
                        <input ref={emailRef} type="email" className="form-input"  placeholder="Email" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label className="textcolorwhite" htmlFor="exampleInputPassword1">Password </label>
                        <input ref={passwordRef} type="password" className="form-input" id="password-input" placeholder="Password" />
                    </div>
                    <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                        <span  aria-hidden="true"></span>
                        <span>Error:</span> <span className="msg"></span>
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="submit" className="btn btn-default signup">Sign Up</button>
                    <br />
                <p className="textcolorwhite">Or log in <Link className="linktext" to="/login">here</Link></p>
                </form>
                <br />
                

            </Grid>
        </Container>
        </Grid>
    )
}

export default Signup;

