import React from "react"
import ReactDOM from "react-dom"
import LandingPage from "./landingpage"
import Header from "./header"

const App = () => {
    return (
        <div>
            <Header />
            <LandingPage />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"))