import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Key from "./Components/Key/Key";
// import Keyboard from "./components/Keyboard/Keyboard";
import SynthPage from "./pages/SynthPage/SynthPage"
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import LogInContext from "./utils/LogInContext";


function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <LogInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Router>
            <Switch>
                <Route exact path='/signup'>
                    <Signup/>
                    </Route>
                <Route exact path={[ '/' , '/login' ]}>
                    <Login/>
                    </Route>
                <Route exact path='/synth'>
                    <SynthPage />
                </Route>
            </Switch>
                </Router>
        </LogInContext.Provider>

    );
}

export default App;