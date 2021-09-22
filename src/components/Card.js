import React, { useState} from 'react';
import '../styles/Card.css'

const Card = (props) => {

    return (
        <div className="card">
            {props.head}
            {props.body}
        </div>

    )

}

export default Card;