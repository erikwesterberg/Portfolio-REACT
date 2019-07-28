import React  from "react"
import "./css/header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
        return (
             <nav>
                 <ul>
                    <NavLink class="button1" to="./projects">Projects</NavLink>
                    <NavLink class="button1" to="./contact">Contact</NavLink>
                    <NavLink class="button1" to="./landingpage">Home</NavLink>
                </ul>
            </nav>
        )   
}

export default Header