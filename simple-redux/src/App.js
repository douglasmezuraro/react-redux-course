import './App.css';
import Card from './components/Card';

const App = () => (
    <div className='App'>
        <h1>Exercício React-Redux (Simples)</h1>
        <div>
            <div className='row'>
                <Card blue title='Card #01' chidren='blablabla' />
                <Card purple title='Card #02' chidren='blablabla' />
            </div>
            <div className='row'>
                <Card green title='Card #03' chidren='blablabla' />
                <Card red title='Card #04' chidren='blablabla' />
            </div>
        </div>
    </div>
);

export default App;
