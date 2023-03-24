import React from "react";
import "../styles/Card.css"

function Card({users}) {
    const { name, job, hobby }= users;
    return (
        <div className="card-container">
            <p className="card-header">{name}</p>
            <p className="card-body">{job}</p>
            <p className="card-body">{hobby}</p>
        </div>
    )
}
export default Card;