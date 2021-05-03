import React, { Component } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./Calculator.css"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    acc: 0.0,
    current: 0.0,
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.setOperation = this.setOperation.bind(this);
        this.setDigit = this.setDigit.bind(this);
        this.clearMemory = this.clearMemory.bind(this);
    };

    state = { ...initialState };

    newValue() {
        if (this.state.operation === '+') {
            return this.state.acc + this.state.current;
        }
        else if (this.state.operation === '-') {
            return this.state.acc - this.state.current;
        }
        else if (this.state.operation === '*') {
            return this.state.acc * this.state.current;
        }
        else if (this.state.operation === '/') {
            return this.state.acc / this.state.current;
        };
    };

    setOperation(operation) {
        if (operation === '=') {
            let newValue = this.newValue()
            this.setState({
                acc: newValue,
                clearDisplay: false,
                displayValue: newValue.toString(),
                operation: null,
                current: newValue,
            })
        } else {
            this.setState({
                acc: this.state.current,
                clearDisplay: true,
                operation: operation,
            });
        }
    };

    setDigit(digit) {
        if (digit === "." && this.state.displayValue.includes(".")) {
            return;
        };

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const displayValue = clearDisplay ? digit : this.state.displayValue + digit;

        this.setState({
            displayValue,
            clearDisplay: false,
            current: parseFloat(displayValue),
        });
    };

    clearMemory() {
        this.setState({ ...initialState });
    };

    render() {
        return (
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
};

export default Calculator;
