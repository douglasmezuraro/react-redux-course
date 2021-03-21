import "./App.css"
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

const App = () => (
    <div id="app" className="App">
        <div id="cards" className="Cards">
            <Card title="EvenOrOdd" color="#000">
                <EvenOrOdd value={14}/>
            </Card>
            <Card title="Products" color="#920024">
                <Products />
            </Card>
            <Card title="Students" color="#ff7f0e">
                <Students />
            </Card>
            <Card title="Family" color="#00173d">
                <Family lastName="Silva">
                    <FamilyMember name="João" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Guilherme" />
                    <FamilyMember name="Laura" />
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
