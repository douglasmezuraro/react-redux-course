import Card from "./layout/Card";
import Random from "./components/basics/Random";
import WithArgument from "./components/basics/WithArgument";
import First from "./components/basics/First";
import React from "react";

const App = () => (
    <div id="app">  
        <Card title="Random">
            <Random min={ 5 } max={ 15 }/>
        </Card>
        <Card title="WithArgument">
            <WithArgument a="1" b="2"/>
        </Card>
        <Card title="First">
            <First/>
        </Card>
    </div>
);

export default App;