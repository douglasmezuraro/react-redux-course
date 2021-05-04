import React, { Component } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./Calculator.css";

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.setOperation = this.setOperation.bind(this);
        this.setDigit = this.setDigit.bind(this);
        this.clearMemory = this.clearMemory.bind(this);
    };

    state = { ...initialState };

    calculateValue = () => {
        switch (this.state.operation) {
            case "+": return this.state.values[0] + this.state.values[1];
            case "-": return this.state.values[0] - this.state.values[1];
            case "*": return this.state.values[0] * this.state.values[1];
            case "/": return this.state.values[0] / this.state.values[1];
            default: return 0.0;
        };
    };

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === "=";
            const calculatedValue = this.calculateValue();

            this.setState({
                values: [calculatedValue, 0.0],
                displayValue: calculatedValue,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
            });
        }
    };

    setDigit(digit) {
        if (digit === "." && typeof this.state.displayValue === "string" && this.state.displayValue.includes(".")) {
            return;
        };

        const clearDisplay = (this.state.displayValue === "0" && digit !== '.') || this.state.clearDisplay;
        const displayValue = clearDisplay ? digit : this.state.displayValue + digit;

        this.setState({ displayValue, clearDisplay: false });

        if (digit !== ".") {
            const index = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];

            values[index] = newValue;

            this.setState({ values });
        };
    };

    clearMemory() {
        this.setState({ ...initialState });
    };

    render = () => (
        <div className="calculator">
            <Display value={this.state.displayValue} />
            <Button label="AC" onClick={this.clearMemory} triple />
            <Button label="/" onClick={this.setOperation} operation />
            <Button label="7" onClick={this.setDigit} />
            <Button label="8" onClick={this.setDigit} />
            <Button label="9" onClick={this.setDigit} />
            <Button label="*" onClick={this.setOperation} operation />
            <Button label="4" onClick={this.setDigit} />
            <Button label="5" onClick={this.setDigit} />
            <Button label="6" onClick={this.setDigit} />
            <Button label="-" onClick={this.setOperation} operation />
            <Button label="1" onClick={this.setDigit} />
            <Button label="2" onClick={this.setDigit} />
            <Button label="3" onClick={this.setDigit} />
            <Button label="+" onClick={this.setOperation} operation />
            <Button label="0" onClick={this.setDigit} double />
            <Button label="." onClick={this.setDigit} />
            <Button label='=' onClick={this.setOperation} operation />
        </div>
    );
};

export default Calculator;
