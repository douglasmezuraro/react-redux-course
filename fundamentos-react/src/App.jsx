import "./App.css"
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
            <Card title="Family" color="000">
                <Family lastName="Silva">
                    <FamilyMember name="João" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Guilherme" />
                    <FamilyMember name="Laura" />
                </Family>
            </Card>
            <Card title="Random" color="#003">
                <Random min={5} max={15} />
            </Card>
            <Card title="WithArgument" color="#030">
                <WithArgument a="1" b="2" c="3" />
            </Card>
            <Card title="First" color="#500">
                <First />
            </Card>
        </div>
    </div>
);

export default App;