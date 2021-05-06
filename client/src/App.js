import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Key from "./Components/Key/Key";
// import Keyboard from "./components/Keyboard/Keyboard";
import SynthPage from "./pages/SynthPage/SynthPage"
import Signup from "./Components/Signup/Signup";



function App() {
    return (
        <Router>
            <SynthPage />
            <Switch>
                <Route exact path='/signup'>
                    <Signup/>
            </Route>
        </Switch>
                </Router>

    );
}

export default App;