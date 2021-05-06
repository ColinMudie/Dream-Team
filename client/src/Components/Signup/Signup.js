import React, { useRef } from "react";
import API from "../../utils/API";

function Signup () {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
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
        API.createUser({ 
            email: userData.email, 
            password: userData.password 
        }).catch(err => console.log(err));
        formRef.current.reset()
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form ref={formRef} className="signup">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input ref={emailRef} type="email" className="form-control" id="email-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="password-input" placeholder="Password" />
                        </div>
                        <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;

