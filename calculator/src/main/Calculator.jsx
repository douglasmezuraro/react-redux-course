import React, { Component } from "react";
import Button from "../components/Button";
import "./Calculator.css"
class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Button />
            </div>
        );
    };
};

export default Calculator;
