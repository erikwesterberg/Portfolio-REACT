import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./landingpage"
import { BrowserRouter } from 'react-router-dom'
import Header from "./header"
import About from "./aboutme"
import Projects from "./projects"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <Switch>
                <Route exact path='/landingpage.jsx' component={LandingPage}></Route>
                <Route exact path='/about' component={About}></Route>
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