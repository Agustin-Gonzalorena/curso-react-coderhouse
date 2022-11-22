import React from 'react'
import { Button } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import "./Products.css"
const Products = ({ title }) => {
    return (
        <div className='containerProducts'>
            <h1>{title}</h1>
            <Button>Agregar al carrito</Button>
        </div>
    )
}

export default Products