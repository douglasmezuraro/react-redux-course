import "./App.css";
import "./components/counter/v1/Counter";
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
import CounterV1 from "./components/counter/v1/Counter";
import CounterV2 from "./components/counter/v2/Counter";

const App = () => (
    <div id="app" className="App">
        <div id="cards" className="Cards">
            <Card title="Counter V2" >
                <CounterV2 />
            </Card>

            <Card title="Counter V1" >
                <CounterV1 />
            </Card>

            <Card title="Input" >
                <Input />
            </Card>

            <Card title="Indirect comunication" >
                <IndirectComunication />
            </Card>

            <Card title="Direct comunication" >
                <DirectComunication />
            </Card>

            <Card title="User" >
                <User user={{ name: "Douglas Mezuraro" }} />
            </Card>

            <Card title="Even or Odd" >
                <EvenOrOdd value={14} />
            </Card>

            <Card title="Products" >
                <Products />
            </Card>

            <Card title="Students" >
                <Students />
            </Card>

            <Card title="Family" >
                <Family lastName="Silva">
                    <FamilyMember id={1} name="João" />
                    <FamilyMember id={2} name="Ana" />
                    <FamilyMember id={3} name="Guilherme" />
                    <FamilyMember id={4} name="Laura" />
                </Family>
            </Card>

            <Card title="Random" >
                <Random min={5} max={600} />
            </Card>

            <Card title="WithArgument" >
                <WithArgument first="Teste #1" second="Teste #2" third="Teste #3" />
            </Card>

            <Card title="First" >
                <First />
            </Card>
        </div>
    </div>
);

export default App;
