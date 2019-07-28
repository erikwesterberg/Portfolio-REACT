import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./landingpage"
import { BrowserRouter } from 'react-router-dom'
import Header from "./header"
import About from "./aboutme"
import Projects from "./projects"
import Contact from "./contact"
import Footer from "./Footer"
import { Switch, Route } from 'react-router-dom'
import picture from "./img/nudu.jpg"



const App = () => {
    return (
        <div>
            <Header />
            <div className="HomeHeader">
            <h2 className="header">Hi, I'm Erik</h2>
            <p>I'm a Full Stack Developer living in Stockholm, Sweden</p>
            </div>
            <img className="arrowPic" src={picture} />
            
           <LandingPage />
           <Footer />
            <About />
            <Projects />
            <Switch>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/aboutme' component={About}></Route>
                <Route exact path='/projects' component={Projects}></Route>
                <Route exact path='/landingpage' component={LandingPage}></Route>
            </Switch>
            
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));