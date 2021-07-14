import './App.css';

import Card from './components/Card';
import Interval from './components/Interval';

const App = () => (
    <div className='App'>
        <h1>Exercício React-Redux (Simples)</h1>
        <div>
            <div className='row'>
                <Interval />
                <Card purple title='Card #02' ></Card>
            </div>
            <div className='row'>
                <Card green title='Card #03' ></Card>
                <Card red title='Card #04' ></Card>
            </div>
        </div>
    </div>
);

export default App;
