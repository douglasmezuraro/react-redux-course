import React, { Component } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import "./Calculator.css"
class Calculator extends Component {

    constructor(props) {
        super(props);
        this.setOperation = this.setOperation.bind(this);
        this.setDigit = this.setDigit.bind(this);
        this.clearMemory = this.clearMemory.bind(this);
    };

    setOperation(operation) {
        //TODO: implement the method "setOperation".
    };

    setDigit(digit) {
        //TODO: implement the method "setDigit".
    };

    clearMemory() {
        //TODO: implement the method "clearMemory".
    };

    render() {
        return (
            <div className="calculator">
                <Display value="0" />
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
