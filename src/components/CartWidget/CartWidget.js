import React from 'react'
import Icon from '../Stateless/Icon/Icon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap'

const CartWidget = () => {

    return (
        <div>
            <Icon icon={faCartShopping} />
            <Badge bg="dark">4</Badge>
        </div>
    )
}

export default CartWidget