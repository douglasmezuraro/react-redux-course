import React from "react";
import "./Button.css"

const Button = ({ label, onClick, operation, double, triple }) =>
    <button
        className={`
            button
            ${operation ? 'operation' : ''}
            ${double ? 'double' : ''}
            ${triple ? 'triple' : ''}
        `}
        onClick={() => onClick && onClick(label)}
    >
        {label}
    </button>

export default Button;

