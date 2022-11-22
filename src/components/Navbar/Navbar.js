import React from 'react'
import { Button } from 'react-bootstrap';
import './Navbar.css'

export const Navbar = () => {
    function login() {
        console.log("Hola")
    }
    return (
        <nav>
            <h1>Ash react</h1>
            <ul className='itemsNav'>
                <li><a href="#1"> Home</a></li>
                <li><a href="#2">Products</a></li>
                <li><a href="#3">About</a></li>
            </ul>
            <div className='containerLoggin'>
                <Button variant="dark" onClick={login}>Login</Button>
            </div>
        </nav>
    )
}
export default Navbar;