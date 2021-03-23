import "./Counter.css";
import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value || 0,
        step: this.props.step || 1,
    };

    inc = () => {
        this.setState({
            value: this.state.value + this.state.step,
        });
    };

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step,
        });
    };

    reset = () => {
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
            <div>
                <label htmlFor="valueInput"> Valor: </label>
                <input id="valueInput" value={this.state.value} readonly />
            </div>
            <div>
                <label htmlFor="stepInput"> Passo: </label>
                <input id="stepInput" type="number" value={this.state.step} onChange={this.handleStep} />
            </div>
            <div>
                <button onClick={this.dec}>-</button>
                <button onClick={this.reset}>0</button>
                <button onClick={this.inc}>+</button>
            </div>
        </div>
    );
};

export default Counter;
