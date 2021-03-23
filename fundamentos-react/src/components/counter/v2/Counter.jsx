import "./Counter.css";
import React, { Component } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import Step from "./Step";

class Counter extends Component {
    state = {
        value: this.props.value || 0,
        step: this.props.step || 1,
    };

    handleInc = () => {
        this.setState({
            value: this.state.value + this.state.step,
        });
    };

    handleDec = () => {
        this.setState({
            value: this.state.value - this.state.step,
        });
    };

    handleReset = () => {
        this.setState({
            value: 0,
            step: 1,
        });
    };

    handleStep = e => {
        this.setState({
            step: parseInt(e.target.value) || 1,
        });
    };

    render = () => (
        <div className="Counter">
            <Display value={this.state.value} />
            <Step step={this.state.step} handleStep={this.handleStep} />
            <Buttons handleDec={this.handleDec} handleReset={this.handleReset} handleInc={this.handleInc} />
        </div>
    );
};

export default Counter;
