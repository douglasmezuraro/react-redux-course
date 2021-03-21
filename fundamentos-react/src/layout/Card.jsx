import "./Card.css";
import React from "react";

const Card = props => {
    const { title, children, color } = props;
    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title"> {title} </div>
            <div className="Content"> {children} </div>
        </div>
    );
};

export default Card;
