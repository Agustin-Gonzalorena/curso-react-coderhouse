import React from 'react'
import Icon from '../Stateless/Icon/Icon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap'

const CartWidget = ({ num }) => {

    return (
        <div>
            <Icon icon={faCartShopping} />
            <Badge bg="dark">{num}</Badge>
        </div>
    )
}

export default CartWidget