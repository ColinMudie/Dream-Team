  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Key from "./Components/Key/Key";
// import Keyboard from "./components/Keyboard/Keyboard";
import SynthPage from "./pages/SynthPage/SynthPage"
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path={[ '/' , '/login' ]} component={Login} />
                <Route exact path='/synth' component={SynthPage} />
                </Switch>
                </Router>

    );
}

export default App;