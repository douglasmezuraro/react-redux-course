import "./Card.css";
import React from "react";

const Card = props => {
    const { title } = props;
    return (
        <div className="Card">
            <div className="Title"> { title } </div>
            <div className="Content"> { props.children } </div>
        </div>
    );
};

export default Card;