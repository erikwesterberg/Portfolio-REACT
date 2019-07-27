import React  from "react"
import "./css/header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
        return (
             <nav>
                 <ul>
                    <NavLink class="button1" to="./aboutme">Erik Westeberg</NavLink>
                    <NavLink class="button1" to="./projects">Projects</NavLink>
                    <NavLink class="button1" to="./contact">Contact</NavLink>
                </ul>
            </nav>
        )   
}

export default Header