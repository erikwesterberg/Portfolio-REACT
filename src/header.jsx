import React  from "react"
import "./css/header.css"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
        return (
             <nav>
                <button class="button1">Erik Westeberg</button>
                <button class="button1">Projects</button>
                <button class="button1">Contact</button>
            </nav>
        )   
}

export default Header