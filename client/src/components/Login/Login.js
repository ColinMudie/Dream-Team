import React, { useRef, useContext } from "react";
import API from "../../utils/API";
import { Redirect, Link } from 'react-router-dom';
import LogInContext from "../../utils/LogInContext";
import { Grid, Container, Typography } from '@material-ui/core';
import "./Login.css"

function Login(props) {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
    // When the signup button is clicked, we validate the email and password are not blank
    const handleSubmit = event => {
        event.preventDefault();
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
            .then((res) => {
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

                <Grid className="login-form" item xs={12} direction="row" justify="center" alignItems="center">
                    <Typography variant="h4">
                        <h2 className="titletext">Login</h2>
                    </Typography>

                    <form ref={formRef} >
                        <div className="form-group email-group">
                            <label className="textcolorwhite" htmlFor="exampleInputEmail1"> Email address </label>
                            <input ref={emailRef} type="email" className="form-input" placeholder="Email" />

                        </div>
                        <br />
                        <div className="form-group">
                            <label className="textcolorwhite" htmlFor="exampleInputPassword1"> Password </label>
                            <input ref={passwordRef} type="password" className="form-input" id="password-input" placeholder="Password" />
                        </div>
                        <div style={{ display: "none" }} id="alert" className="" role="alert">
                            <span aria-hidden="true"></span>
                            <span>Error:</span> <span className="msg"></span>

                        </div>
                    
                    <div className="login">
                        <button onClick={handleSubmit} type="submit" className="btn btn-default login-btn">Login</button>
                        <p className="textcolorwhite sign-up">Or Sign Up <Link className="linktext" to="/signup">here</Link></p>
                        </div>
                    </form>
                </Grid>
            </Container>

        </Grid>


    )
}

export default Login;

