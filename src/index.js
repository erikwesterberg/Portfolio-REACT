import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./landingpage"
import { BrowserRouter } from 'react-router-dom'
import Header from "./header"
import About from "./aboutme"
import Projects from "./projects"
import Contact from "./contact"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <Switch>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/aboutme' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));