import "./App.css";
import "./components/counter/Counter";
import Input from "./components/form/input";
import IndirectComunication from "./components/comunication/indirect/Parent";
import DirectComunication from "./components/comunication/direct/Parent";
import User from "./components/conditional/User";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import Products from "./components/loop/Products";
import Students from "./components/loop/Students";
import FamilyMember from "./components/basics/FamilyMember";
import Family from "./components/basics/Family";
import Card from "./layout/Card";
import Random from "./components/basics/Random";
import WithArgument from "./components/basics/WithArgument";
import First from "./components/basics/First";
import React from "react";
import Counter from "./components/counter/Counter";

const App = () => (
    <div id="app" className="App">
        <div id="cards" className="Cards">
            <Card title="Counter" color="#000">
                <Counter />
            </Card>
            <Card title="Input" color="#1f77b4">
                <Input />
            </Card>
            <Card title="Indirect comunication" color="#444">
                <IndirectComunication />
            </Card>
            <Card title="Direct comunication" color="#59323C">
                <DirectComunication />
            </Card>
            <Card title="User" color="#9467bd">
                <User user={{ name: "Douglas Mezuraro" }} />
            </Card>
            <Card title="Even or Odd" color="#000">
                <EvenOrOdd value={14} />
            </Card>
            <Card title="Products" color="#920024">
                <Products />
            </Card>
            <Card title="Students" color="#ff7f0e">
                <Students />
            </Card>
            <Card title="Family" color="#00173d">
                <Family lastName="Silva">
                    <FamilyMember id={1} name="João" />
                    <FamilyMember id={2} name="Ana" />
                    <FamilyMember id={3} name="Guilherme" />
                    <FamilyMember id={4} name="Laura" />
                </Family>
            </Card>
            <Card title="Random" color="#6495ED">
                <Random min={5} max={600} />
            </Card>
            <Card title="WithArgument" color="#1f77b4">
                <WithArgument first="Teste #1" second="Teste #2" third="Teste #3" />
            </Card>
            <Card title="First" color="#b67cca">
                <First />
            </Card>
        </div>
    </div>
);

export default App;
