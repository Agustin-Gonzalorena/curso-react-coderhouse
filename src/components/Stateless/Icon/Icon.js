import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }) => {
    return (
        <span style={{ fontSize: "30px" }}>
            <FontAwesomeIcon icon={icon} />
        </span>
    )
}

export default Icon;